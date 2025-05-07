# `googleAccessContextManagerGcpUserAccessBinding` Submodule <a name="`googleAccessContextManagerGcpUserAccessBinding` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerGcpUserAccessBinding <a name="GoogleAccessContextManagerGcpUserAccessBinding" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding google_access_context_manager_gcp_user_access_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBinding(Construct Scope, string Id, GoogleAccessContextManagerGcpUserAccessBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig">GoogleAccessContextManagerGcpUserAccessBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig">GoogleAccessContextManagerGcpUserAccessBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putScopedAccessSettings">PutScopedAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putSessionSettings">PutSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetScopedAccessSettings">ResetScopedAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetSessionSettings">ResetSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScopedAccessSettings` <a name="PutScopedAccessSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putScopedAccessSettings"></a>

```csharp
private void PutScopedAccessSettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putScopedAccessSettings.parameter.value"></a>

- *Type:* object

---

##### `PutSessionSettings` <a name="PutSessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putSessionSettings"></a>

```csharp
private void PutSessionSettings(GoogleAccessContextManagerGcpUserAccessBindingSessionSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putSessionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleAccessContextManagerGcpUserAccessBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts">GoogleAccessContextManagerGcpUserAccessBindingTimeouts</a>

---

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetAccessLevels"></a>

```csharp
private void ResetAccessLevels()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScopedAccessSettings` <a name="ResetScopedAccessSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetScopedAccessSettings"></a>

```csharp
private void ResetScopedAccessSettings()
```

##### `ResetSessionSettings` <a name="ResetSessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetSessionSettings"></a>

```csharp
private void ResetSessionSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerGcpUserAccessBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerGcpUserAccessBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerGcpUserAccessBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerGcpUserAccessBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerGcpUserAccessBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleAccessContextManagerGcpUserAccessBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAccessContextManagerGcpUserAccessBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAccessContextManagerGcpUserAccessBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerGcpUserAccessBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.scopedAccessSettings">ScopedAccessSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.groupKeyInput">GroupKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.organizationIdInput">OrganizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.scopedAccessSettingsInput">ScopedAccessSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.sessionSettingsInput">SessionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.accessLevels">AccessLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.groupKey">GroupKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScopedAccessSettings`<sup>Required</sup> <a name="ScopedAccessSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.scopedAccessSettings"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList ScopedAccessSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList</a>

---

##### `SessionSettings`<sup>Required</sup> <a name="SessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.sessionSettings"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference SessionSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.timeouts"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference</a>

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.accessLevelsInput"></a>

```csharp
public string[] AccessLevelsInput { get; }
```

- *Type:* string[]

---

##### `GroupKeyInput`<sup>Optional</sup> <a name="GroupKeyInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.groupKeyInput"></a>

```csharp
public string GroupKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.organizationIdInput"></a>

```csharp
public string OrganizationIdInput { get; }
```

- *Type:* string

---

##### `ScopedAccessSettingsInput`<sup>Optional</sup> <a name="ScopedAccessSettingsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.scopedAccessSettingsInput"></a>

```csharp
public object ScopedAccessSettingsInput { get; }
```

- *Type:* object

---

##### `SessionSettingsInput`<sup>Optional</sup> <a name="SessionSettingsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.sessionSettingsInput"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingSessionSettings SessionSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.accessLevels"></a>

```csharp
public string[] AccessLevels { get; }
```

- *Type:* string[]

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.groupKey"></a>

```csharp
public string GroupKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerGcpUserAccessBindingConfig <a name="GoogleAccessContextManagerGcpUserAccessBindingConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GroupKey,
    string OrganizationId,
    string[] AccessLevels = null,
    string Id = null,
    object ScopedAccessSettings = null,
    GoogleAccessContextManagerGcpUserAccessBindingSessionSettings SessionSettings = null,
    GoogleAccessContextManagerGcpUserAccessBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.groupKey">GroupKey</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.organizationId">OrganizationId</a></code> | <code>string</code> | Required. ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.accessLevels">AccessLevels</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#id GoogleAccessContextManagerGcpUserAccessBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.scopedAccessSettings">ScopedAccessSettings</a></code> | <code>object</code> | scoped_access_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | session_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts">GoogleAccessContextManagerGcpUserAccessBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.groupKey"></a>

```csharp
public string GroupKey { get; set; }
```

- *Type:* string

Required.

Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#group_key GoogleAccessContextManagerGcpUserAccessBinding#group_key}

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.organizationId"></a>

```csharp
public string OrganizationId { get; set; }
```

- *Type:* string

Required. ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#organization_id GoogleAccessContextManagerGcpUserAccessBinding#organization_id}

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.accessLevels"></a>

```csharp
public string[] AccessLevels { get; set; }
```

- *Type:* string[]

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#access_levels GoogleAccessContextManagerGcpUserAccessBinding#access_levels}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#id GoogleAccessContextManagerGcpUserAccessBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScopedAccessSettings`<sup>Optional</sup> <a name="ScopedAccessSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.scopedAccessSettings"></a>

```csharp
public object ScopedAccessSettings { get; set; }
```

- *Type:* object

scoped_access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#scoped_access_settings GoogleAccessContextManagerGcpUserAccessBinding#scoped_access_settings}

---

##### `SessionSettings`<sup>Optional</sup> <a name="SessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.sessionSettings"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingSessionSettings SessionSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a>

session_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#session_settings GoogleAccessContextManagerGcpUserAccessBinding#session_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.timeouts"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts">GoogleAccessContextManagerGcpUserAccessBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#timeouts GoogleAccessContextManagerGcpUserAccessBinding#timeouts}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings {
    GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings ActiveSettings = null,
    GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings DryRunSettings = null,
    GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.activeSettings">ActiveSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | active_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.dryRunSettings">DryRunSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | dry_run_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | scope block. |

---

##### `ActiveSettings`<sup>Optional</sup> <a name="ActiveSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.activeSettings"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings ActiveSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

active_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#active_settings GoogleAccessContextManagerGcpUserAccessBinding#active_settings}

---

##### `DryRunSettings`<sup>Optional</sup> <a name="DryRunSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.dryRunSettings"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings DryRunSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

dry_run_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#dry_run_settings GoogleAccessContextManagerGcpUserAccessBinding#dry_run_settings}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.scope"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope Scope { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#scope GoogleAccessContextManagerGcpUserAccessBinding#scope}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings {
    string[] AccessLevels = null,
    GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings SessionSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.accessLevels">AccessLevels</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | session_settings block. |

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.accessLevels"></a>

```csharp
public string[] AccessLevels { get; set; }
```

- *Type:* string[]

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#access_levels GoogleAccessContextManagerGcpUserAccessBinding#access_levels}

---

##### `SessionSettings`<sup>Optional</sup> <a name="SessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.sessionSettings"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings SessionSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

session_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#session_settings GoogleAccessContextManagerGcpUserAccessBinding#session_settings}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings {
    string MaxInactivity = null,
    string SessionLength = null,
    object SessionLengthEnabled = null,
    string SessionReauthMethod = null,
    object UseOidcMaxAge = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.maxInactivity">MaxInactivity</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLength">SessionLength</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>object</code> | Optional. |

---

##### `MaxInactivity`<sup>Optional</sup> <a name="MaxInactivity" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.maxInactivity"></a>

```csharp
public string MaxInactivity { get; set; }
```

- *Type:* string

Optional.

How long a user is allowed to take between actions before a new access token must be issued. Only set for Google Cloud apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#max_inactivity GoogleAccessContextManagerGcpUserAccessBinding#max_inactivity}

---

##### `SessionLength`<sup>Optional</sup> <a name="SessionLength" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLength"></a>

```csharp
public string SessionLength { get; set; }
```

- *Type:* string

Optional.

The session length. Setting this field to zero is equal to disabling session. Also can set infinite session by flipping the enabled bit to false below. If useOidcMaxAge is true, for OIDC apps, the session length will be the minimum of this field and OIDC max_age param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#session_length GoogleAccessContextManagerGcpUserAccessBinding#session_length}

---

##### `SessionLengthEnabled`<sup>Optional</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLengthEnabled"></a>

```csharp
public object SessionLengthEnabled { get; set; }
```

- *Type:* object

Optional.

This field enables or disables Google Cloud session length. When false, all fields set above will be disregarded and the session length is basically infinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#session_length_enabled GoogleAccessContextManagerGcpUserAccessBinding#session_length_enabled}

---

##### `SessionReauthMethod`<sup>Optional</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionReauthMethod"></a>

```csharp
public string SessionReauthMethod { get; set; }
```

- *Type:* string

Optional.

The session challenges proposed to users when the Google Cloud session length is up. Possible values: ["LOGIN", "SECURITY_KEY", "PASSWORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#session_reauth_method GoogleAccessContextManagerGcpUserAccessBinding#session_reauth_method}

---

##### `UseOidcMaxAge`<sup>Optional</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.useOidcMaxAge"></a>

```csharp
public object UseOidcMaxAge { get; set; }
```

- *Type:* object

Optional.

Only useful for OIDC apps. When false, the OIDC max_age param, if passed in the authentication request will be ignored. When true, the re-auth period will be the minimum of the sessionLength field and the max_age OIDC param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#use_oidc_max_age GoogleAccessContextManagerGcpUserAccessBinding#use_oidc_max_age}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings {
    string[] AccessLevels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.property.accessLevels">AccessLevels</a></code> | <code>string[]</code> | Optional. |

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.property.accessLevels"></a>

```csharp
public string[] AccessLevels { get; set; }
```

- *Type:* string[]

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#access_levels GoogleAccessContextManagerGcpUserAccessBinding#access_levels}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope {
    GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope ClientScope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.property.clientScope">ClientScope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | client_scope block. |

---

##### `ClientScope`<sup>Optional</sup> <a name="ClientScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.property.clientScope"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope ClientScope { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

client_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#client_scope GoogleAccessContextManagerGcpUserAccessBinding#client_scope}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope {
    GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication RestrictedClientApplication = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.property.restrictedClientApplication">RestrictedClientApplication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | restricted_client_application block. |

---

##### `RestrictedClientApplication`<sup>Optional</sup> <a name="RestrictedClientApplication" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.property.restrictedClientApplication"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication RestrictedClientApplication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

restricted_client_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#restricted_client_application GoogleAccessContextManagerGcpUserAccessBinding#restricted_client_application}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication {
    string ClientId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.clientId">ClientId</a></code> | <code>string</code> | The OAuth client ID of the application. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The OAuth client ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#client_id GoogleAccessContextManagerGcpUserAccessBinding#client_id}

---

### GoogleAccessContextManagerGcpUserAccessBindingSessionSettings <a name="GoogleAccessContextManagerGcpUserAccessBindingSessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingSessionSettings {
    string MaxInactivity = null,
    string SessionLength = null,
    object SessionLengthEnabled = null,
    string SessionReauthMethod = null,
    object UseOidcMaxAge = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.maxInactivity">MaxInactivity</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLength">SessionLength</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>object</code> | Optional. |

---

##### `MaxInactivity`<sup>Optional</sup> <a name="MaxInactivity" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.maxInactivity"></a>

```csharp
public string MaxInactivity { get; set; }
```

- *Type:* string

Optional.

How long a user is allowed to take between actions before a new access token must be issued. Only set for Google Cloud apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#max_inactivity GoogleAccessContextManagerGcpUserAccessBinding#max_inactivity}

---

##### `SessionLength`<sup>Optional</sup> <a name="SessionLength" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLength"></a>

```csharp
public string SessionLength { get; set; }
```

- *Type:* string

Optional.

The session length. Setting this field to zero is equal to disabling session. Also can set infinite session by flipping the enabled bit to false below. If useOidcMaxAge is true, for OIDC apps, the session length will be the minimum of this field and OIDC max_age param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#session_length GoogleAccessContextManagerGcpUserAccessBinding#session_length}

---

##### `SessionLengthEnabled`<sup>Optional</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLengthEnabled"></a>

```csharp
public object SessionLengthEnabled { get; set; }
```

- *Type:* object

Optional.

This field enables or disables Google Cloud session length. When false, all fields set above will be disregarded and the session length is basically infinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#session_length_enabled GoogleAccessContextManagerGcpUserAccessBinding#session_length_enabled}

---

##### `SessionReauthMethod`<sup>Optional</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionReauthMethod"></a>

```csharp
public string SessionReauthMethod { get; set; }
```

- *Type:* string

Optional.

The session challenges proposed to users when the Google Cloud session length is up. Possible values: ["LOGIN", "SECURITY_KEY", "PASSWORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#session_reauth_method GoogleAccessContextManagerGcpUserAccessBinding#session_reauth_method}

---

##### `UseOidcMaxAge`<sup>Optional</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.useOidcMaxAge"></a>

```csharp
public object UseOidcMaxAge { get; set; }
```

- *Type:* object

Optional.

Only useful for OIDC apps. When false, the OIDC max_age param, if passed in the authentication request will be ignored. When true, the re-auth period will be the minimum of the sessionLength field and the max_age OIDC param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#use_oidc_max_age GoogleAccessContextManagerGcpUserAccessBinding#use_oidc_max_age}

---

### GoogleAccessContextManagerGcpUserAccessBindingTimeouts <a name="GoogleAccessContextManagerGcpUserAccessBindingTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#create GoogleAccessContextManagerGcpUserAccessBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#delete GoogleAccessContextManagerGcpUserAccessBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#update GoogleAccessContextManagerGcpUserAccessBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#create GoogleAccessContextManagerGcpUserAccessBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#delete GoogleAccessContextManagerGcpUserAccessBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.34.0/docs/resources/google_access_context_manager_gcp_user_access_binding#update GoogleAccessContextManagerGcpUserAccessBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings">PutSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetSessionSettings">ResetSessionSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionSettings` <a name="PutSessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings"></a>

```csharp
private void PutSessionSettings(GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetAccessLevels"></a>

```csharp
private void ResetAccessLevels()
```

##### `ResetSessionSettings` <a name="ResetSessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetSessionSettings"></a>

```csharp
private void ResetSessionSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettingsInput">SessionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevels">AccessLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SessionSettings`<sup>Required</sup> <a name="SessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettings"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference SessionSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference</a>

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevelsInput"></a>

```csharp
public string[] AccessLevelsInput { get; }
```

- *Type:* string[]

---

##### `SessionSettingsInput`<sup>Optional</sup> <a name="SessionSettingsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettingsInput"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings SessionSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevels"></a>

```csharp
public string[] AccessLevels { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetMaxInactivity">ResetMaxInactivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLength">ResetSessionLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLengthEnabled">ResetSessionLengthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionReauthMethod">ResetSessionReauthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetUseOidcMaxAge">ResetUseOidcMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInactivity` <a name="ResetMaxInactivity" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetMaxInactivity"></a>

```csharp
private void ResetMaxInactivity()
```

##### `ResetSessionLength` <a name="ResetSessionLength" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLength"></a>

```csharp
private void ResetSessionLength()
```

##### `ResetSessionLengthEnabled` <a name="ResetSessionLengthEnabled" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLengthEnabled"></a>

```csharp
private void ResetSessionLengthEnabled()
```

##### `ResetSessionReauthMethod` <a name="ResetSessionReauthMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionReauthMethod"></a>

```csharp
private void ResetSessionReauthMethod()
```

##### `ResetUseOidcMaxAge` <a name="ResetUseOidcMaxAge" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetUseOidcMaxAge"></a>

```csharp
private void ResetUseOidcMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivityInput">MaxInactivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabledInput">SessionLengthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthInput">SessionLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethodInput">SessionReauthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAgeInput">UseOidcMaxAgeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivity">MaxInactivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLength">SessionLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInactivityInput`<sup>Optional</sup> <a name="MaxInactivityInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivityInput"></a>

```csharp
public string MaxInactivityInput { get; }
```

- *Type:* string

---

##### `SessionLengthEnabledInput`<sup>Optional</sup> <a name="SessionLengthEnabledInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabledInput"></a>

```csharp
public object SessionLengthEnabledInput { get; }
```

- *Type:* object

---

##### `SessionLengthInput`<sup>Optional</sup> <a name="SessionLengthInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthInput"></a>

```csharp
public string SessionLengthInput { get; }
```

- *Type:* string

---

##### `SessionReauthMethodInput`<sup>Optional</sup> <a name="SessionReauthMethodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethodInput"></a>

```csharp
public string SessionReauthMethodInput { get; }
```

- *Type:* string

---

##### `UseOidcMaxAgeInput`<sup>Optional</sup> <a name="UseOidcMaxAgeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAgeInput"></a>

```csharp
public object UseOidcMaxAgeInput { get; }
```

- *Type:* object

---

##### `MaxInactivity`<sup>Required</sup> <a name="MaxInactivity" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivity"></a>

```csharp
public string MaxInactivity { get; }
```

- *Type:* string

---

##### `SessionLength`<sup>Required</sup> <a name="SessionLength" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLength"></a>

```csharp
public string SessionLength { get; }
```

- *Type:* string

---

##### `SessionLengthEnabled`<sup>Required</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabled"></a>

```csharp
public object SessionLengthEnabled { get; }
```

- *Type:* object

---

##### `SessionReauthMethod`<sup>Required</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethod"></a>

```csharp
public string SessionReauthMethod { get; }
```

- *Type:* string

---

##### `UseOidcMaxAge`<sup>Required</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAge"></a>

```csharp
public object UseOidcMaxAge { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resetAccessLevels"></a>

```csharp
private void ResetAccessLevels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevels">AccessLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevelsInput"></a>

```csharp
public string[] AccessLevelsInput { get; }
```

- *Type:* string[]

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevels"></a>

```csharp
public string[] AccessLevels { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get"></a>

```csharp
private GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings">PutActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings">PutDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetActiveSettings">ResetActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetDryRunSettings">ResetDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveSettings` <a name="PutActiveSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings"></a>

```csharp
private void PutActiveSettings(GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---

##### `PutDryRunSettings` <a name="PutDryRunSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings"></a>

```csharp
private void PutDryRunSettings(GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---

##### `PutScope` <a name="PutScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope"></a>

```csharp
private void PutScope(GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---

##### `ResetActiveSettings` <a name="ResetActiveSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetActiveSettings"></a>

```csharp
private void ResetActiveSettings()
```

##### `ResetDryRunSettings` <a name="ResetDryRunSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetDryRunSettings"></a>

```csharp
private void ResetDryRunSettings()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettings">ActiveSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettings">DryRunSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettingsInput">ActiveSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettingsInput">DryRunSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveSettings`<sup>Required</sup> <a name="ActiveSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettings"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference ActiveSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference</a>

---

##### `DryRunSettings`<sup>Required</sup> <a name="DryRunSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettings"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference DryRunSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scope"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference</a>

---

##### `ActiveSettingsInput`<sup>Optional</sup> <a name="ActiveSettingsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettingsInput"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings ActiveSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---

##### `DryRunSettingsInput`<sup>Optional</sup> <a name="DryRunSettingsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettingsInput"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings DryRunSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scopeInput"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope ScopeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication">PutRestrictedClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resetRestrictedClientApplication">ResetRestrictedClientApplication</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRestrictedClientApplication` <a name="PutRestrictedClientApplication" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication"></a>

```csharp
private void PutRestrictedClientApplication(GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---

##### `ResetRestrictedClientApplication` <a name="ResetRestrictedClientApplication" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resetRestrictedClientApplication"></a>

```csharp
private void ResetRestrictedClientApplication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplication">RestrictedClientApplication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplicationInput">RestrictedClientApplicationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RestrictedClientApplication`<sup>Required</sup> <a name="RestrictedClientApplication" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplication"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference RestrictedClientApplication { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference</a>

---

##### `RestrictedClientApplicationInput`<sup>Optional</sup> <a name="RestrictedClientApplicationInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplicationInput"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication RestrictedClientApplicationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope">PutClientScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resetClientScope">ResetClientScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientScope` <a name="PutClientScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope"></a>

```csharp
private void PutClientScope(GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---

##### `ResetClientScope` <a name="ResetClientScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resetClientScope"></a>

```csharp
private void ResetClientScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScope">ClientScope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScopeInput">ClientScopeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientScope`<sup>Required</sup> <a name="ClientScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScope"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference ClientScope { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference</a>

---

##### `ClientScopeInput`<sup>Optional</sup> <a name="ClientScopeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScopeInput"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope ClientScopeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetMaxInactivity">ResetMaxInactivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLength">ResetSessionLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLengthEnabled">ResetSessionLengthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionReauthMethod">ResetSessionReauthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetUseOidcMaxAge">ResetUseOidcMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInactivity` <a name="ResetMaxInactivity" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetMaxInactivity"></a>

```csharp
private void ResetMaxInactivity()
```

##### `ResetSessionLength` <a name="ResetSessionLength" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLength"></a>

```csharp
private void ResetSessionLength()
```

##### `ResetSessionLengthEnabled` <a name="ResetSessionLengthEnabled" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLengthEnabled"></a>

```csharp
private void ResetSessionLengthEnabled()
```

##### `ResetSessionReauthMethod` <a name="ResetSessionReauthMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionReauthMethod"></a>

```csharp
private void ResetSessionReauthMethod()
```

##### `ResetUseOidcMaxAge` <a name="ResetUseOidcMaxAge" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetUseOidcMaxAge"></a>

```csharp
private void ResetUseOidcMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivityInput">MaxInactivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabledInput">SessionLengthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthInput">SessionLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethodInput">SessionReauthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAgeInput">UseOidcMaxAgeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivity">MaxInactivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLength">SessionLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInactivityInput`<sup>Optional</sup> <a name="MaxInactivityInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivityInput"></a>

```csharp
public string MaxInactivityInput { get; }
```

- *Type:* string

---

##### `SessionLengthEnabledInput`<sup>Optional</sup> <a name="SessionLengthEnabledInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabledInput"></a>

```csharp
public object SessionLengthEnabledInput { get; }
```

- *Type:* object

---

##### `SessionLengthInput`<sup>Optional</sup> <a name="SessionLengthInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthInput"></a>

```csharp
public string SessionLengthInput { get; }
```

- *Type:* string

---

##### `SessionReauthMethodInput`<sup>Optional</sup> <a name="SessionReauthMethodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethodInput"></a>

```csharp
public string SessionReauthMethodInput { get; }
```

- *Type:* string

---

##### `UseOidcMaxAgeInput`<sup>Optional</sup> <a name="UseOidcMaxAgeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAgeInput"></a>

```csharp
public object UseOidcMaxAgeInput { get; }
```

- *Type:* object

---

##### `MaxInactivity`<sup>Required</sup> <a name="MaxInactivity" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivity"></a>

```csharp
public string MaxInactivity { get; }
```

- *Type:* string

---

##### `SessionLength`<sup>Required</sup> <a name="SessionLength" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLength"></a>

```csharp
public string SessionLength { get; }
```

- *Type:* string

---

##### `SessionLengthEnabled`<sup>Required</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabled"></a>

```csharp
public object SessionLengthEnabled { get; }
```

- *Type:* object

---

##### `SessionReauthMethod`<sup>Required</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethod"></a>

```csharp
public string SessionReauthMethod { get; }
```

- *Type:* string

---

##### `UseOidcMaxAge`<sup>Required</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAge"></a>

```csharp
public object UseOidcMaxAge { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerGcpUserAccessBindingSessionSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



