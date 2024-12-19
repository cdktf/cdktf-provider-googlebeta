# `googleSccManagementProjectSecurityHealthAnalyticsCustomModule` Submodule <a name="`googleSccManagementProjectSecurityHealthAnalyticsCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module google_scc_management_project_security_health_analytics_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule(Construct Scope, string Id, GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig">PutCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetCustomConfig">ResetCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetEnablementState">ResetEnablementState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomConfig` <a name="PutCustomConfig" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig"></a>

```csharp
private void PutCustomConfig(GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>

---

##### `ResetCustomConfig` <a name="ResetCustomConfig" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetCustomConfig"></a>

```csharp
private void ResetCustomConfig()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnablementState` <a name="ResetEnablementState" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetEnablementState"></a>

```csharp
private void ResetEnablementState()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.ancestorModule">AncestorModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfig">CustomConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.lastEditor">LastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfigInput">CustomConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementStateInput">EnablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementState">EnablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AncestorModule`<sup>Required</sup> <a name="AncestorModule" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.ancestorModule"></a>

```csharp
public string AncestorModule { get; }
```

- *Type:* string

---

##### `CustomConfig`<sup>Required</sup> <a name="CustomConfig" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfig"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference CustomConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a>

---

##### `LastEditor`<sup>Required</sup> <a name="LastEditor" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.lastEditor"></a>

```csharp
public string LastEditor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeouts"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CustomConfigInput`<sup>Optional</sup> <a name="CustomConfigInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfigInput"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig CustomConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnablementStateInput`<sup>Optional</sup> <a name="EnablementStateInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementStateInput"></a>

```csharp
public string EnablementStateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementState"></a>

```csharp
public string EnablementState { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig CustomConfig = null,
    string DisplayName = null,
    string EnablementState = null,
    string Id = null,
    string Location = null,
    string Project = null,
    GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.customConfig">CustomConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.enablementState">EnablementState</a></code> | <code>string</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#id GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.location">Location</a></code> | <code>string</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#project GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomConfig`<sup>Optional</sup> <a name="CustomConfig" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.customConfig"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig CustomConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#custom_config GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#display_name GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#display_name}

---

##### `EnablementState`<sup>Optional</sup> <a name="EnablementState" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.enablementState"></a>

```csharp
public string EnablementState { get; set; }
```

- *Type:* string

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#enablement_state GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#id GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#location GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#project GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.timeouts"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#timeouts GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#timeouts}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig {
    GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate Predicate,
    string Recommendation,
    GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector ResourceSelector,
    string Severity,
    GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput CustomOutput = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation">Recommendation</a></code> | <code>string</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity">Severity</a></code> | <code>string</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.description">Description</a></code> | <code>string</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate Predicate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#predicate GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#predicate}

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation"></a>

```csharp
public string Recommendation { get; set; }
```

- *Type:* string

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#recommendation GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#recommendation}

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector ResourceSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#resource_selector GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#resource_selector}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#severity GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#severity}

---

##### `CustomOutput`<sup>Optional</sup> <a name="CustomOutput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput CustomOutput { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#custom_output GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#custom_output}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#description GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput {
    object Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties">Properties</a></code> | <code>object</code> | properties block. |

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties"></a>

```csharp
public object Properties { get; set; }
```

- *Type:* object

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#properties GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#properties}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties {
    string Name = null,
    GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression ValueExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name">Name</a></code> | <code>string</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#name GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#name}

---

##### `ValueExpression`<sup>Optional</sup> <a name="ValueExpression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression ValueExpression { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#value_expression GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#value_expression}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#expression GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#description GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#location GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#title GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#title}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#expression GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#description GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#location GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#title GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#title}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector {
    string[] ResourceTypes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | The resource types to run the detector on. |

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#resource_types GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#resource_types}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#create GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#delete GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#update GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#create GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#delete GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#update GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```csharp
private void PutProperties(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* object

---

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```csharp
public object PropertiesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```csharp
private GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">PutValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">ResetValueExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueExpression` <a name="PutValueExpression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```csharp
private void PutValueExpression(GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValueExpression` <a name="ResetValueExpression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```csharp
private void ResetValueExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">ValueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueExpression`<sup>Required</sup> <a name="ValueExpression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference ValueExpression { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueExpressionInput`<sup>Optional</sup> <a name="ValueExpressionInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression ValueExpressionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput">PutCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector">PutResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput">ResetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomOutput` <a name="PutCustomOutput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```csharp
private void PutCustomOutput(GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `PutPredicate` <a name="PutPredicate" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate"></a>

```csharp
private void PutPredicate(GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `PutResourceSelector` <a name="PutResourceSelector" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```csharp
private void PutResourceSelector(GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `ResetCustomOutput` <a name="ResetCustomOutput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```csharp
private void ResetCustomOutput()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput">CustomOutputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput">PredicateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput">RecommendationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">ResourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation">Recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomOutput`<sup>Required</sup> <a name="CustomOutput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference CustomOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference Predicate { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference ResourceSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `CustomOutputInput`<sup>Optional</sup> <a name="CustomOutputInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput CustomOutputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate PredicateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `RecommendationInput`<sup>Optional</sup> <a name="RecommendationInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```csharp
public string RecommendationInput { get; }
```

- *Type:* string

---

##### `ResourceSelectorInput`<sup>Optional</sup> <a name="ResourceSelectorInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector ResourceSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```csharp
public string Recommendation { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```csharp
public GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



