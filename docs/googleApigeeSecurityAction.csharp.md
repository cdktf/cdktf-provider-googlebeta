# `googleApigeeSecurityAction` Submodule <a name="`googleApigeeSecurityAction` Submodule" id="@cdktf/provider-google-beta.googleApigeeSecurityAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeSecurityAction <a name="GoogleApigeeSecurityAction" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action google_apigee_security_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityAction(Construct Scope, string Id, GoogleApigeeSecurityActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig">GoogleApigeeSecurityActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig">GoogleApigeeSecurityActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putConditionConfig">PutConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putDeny">PutDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putFlag">PutFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetApiProxies">ResetApiProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDeny">ResetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetFlag">ResetFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putAllow"></a>

```csharp
private void PutAllow(GoogleApigeeSecurityActionAllow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

---

##### `PutConditionConfig` <a name="PutConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putConditionConfig"></a>

```csharp
private void PutConditionConfig(GoogleApigeeSecurityActionConditionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putConditionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

---

##### `PutDeny` <a name="PutDeny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putDeny"></a>

```csharp
private void PutDeny(GoogleApigeeSecurityActionDeny Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

---

##### `PutFlag` <a name="PutFlag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putFlag"></a>

```csharp
private void PutFlag(GoogleApigeeSecurityActionFlag Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApigeeSecurityActionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetAllow"></a>

```csharp
private void ResetAllow()
```

##### `ResetApiProxies` <a name="ResetApiProxies" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetApiProxies"></a>

```csharp
private void ResetApiProxies()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDeny"></a>

```csharp
private void ResetDeny()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetExpireTime"></a>

```csharp
private void ResetExpireTime()
```

##### `ResetFlag` <a name="ResetFlag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetFlag"></a>

```csharp
private void ResetFlag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeSecurityAction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeSecurityAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeSecurityAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeSecurityAction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeSecurityAction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleApigeeSecurityAction resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeSecurityAction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeSecurityAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeSecurityAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference">GoogleApigeeSecurityActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfig">ConditionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference">GoogleApigeeSecurityActionConditionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference">GoogleApigeeSecurityActionDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flag">Flag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference">GoogleApigeeSecurityActionFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference">GoogleApigeeSecurityActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxiesInput">ApiProxiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfigInput">ConditionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.denyInput">DenyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envIdInput">EnvIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTimeInput">ExpireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flagInput">FlagInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionIdInput">SecurityActionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxies">ApiProxies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envId">EnvId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionId">SecurityActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allow"></a>

```csharp
public GoogleApigeeSecurityActionAllowOutputReference Allow { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference">GoogleApigeeSecurityActionAllowOutputReference</a>

---

##### `ConditionConfig`<sup>Required</sup> <a name="ConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfig"></a>

```csharp
public GoogleApigeeSecurityActionConditionConfigOutputReference ConditionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference">GoogleApigeeSecurityActionConditionConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.deny"></a>

```csharp
public GoogleApigeeSecurityActionDenyOutputReference Deny { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference">GoogleApigeeSecurityActionDenyOutputReference</a>

---

##### `Flag`<sup>Required</sup> <a name="Flag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flag"></a>

```csharp
public GoogleApigeeSecurityActionFlagOutputReference Flag { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference">GoogleApigeeSecurityActionFlagOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeouts"></a>

```csharp
public GoogleApigeeSecurityActionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference">GoogleApigeeSecurityActionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allowInput"></a>

```csharp
public GoogleApigeeSecurityActionAllow AllowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

---

##### `ApiProxiesInput`<sup>Optional</sup> <a name="ApiProxiesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxiesInput"></a>

```csharp
public string[] ApiProxiesInput { get; }
```

- *Type:* string[]

---

##### `ConditionConfigInput`<sup>Optional</sup> <a name="ConditionConfigInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfigInput"></a>

```csharp
public GoogleApigeeSecurityActionConditionConfig ConditionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.denyInput"></a>

```csharp
public GoogleApigeeSecurityActionDeny DenyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envIdInput"></a>

```csharp
public string EnvIdInput { get; }
```

- *Type:* string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTimeInput"></a>

```csharp
public string ExpireTimeInput { get; }
```

- *Type:* string

---

##### `FlagInput`<sup>Optional</sup> <a name="FlagInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flagInput"></a>

```csharp
public GoogleApigeeSecurityActionFlag FlagInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `SecurityActionIdInput`<sup>Optional</sup> <a name="SecurityActionIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionIdInput"></a>

```csharp
public string SecurityActionIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `ApiProxies`<sup>Required</sup> <a name="ApiProxies" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxies"></a>

```csharp
public string[] ApiProxies { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envId"></a>

```csharp
public string EnvId { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `SecurityActionId`<sup>Required</sup> <a name="SecurityActionId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionId"></a>

```csharp
public string SecurityActionId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeSecurityActionAllow <a name="GoogleApigeeSecurityActionAllow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionAllow {

};
```


### GoogleApigeeSecurityActionConditionConfig <a name="GoogleApigeeSecurityActionConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionConditionConfig {
    string[] AccessTokens = null,
    string[] ApiKeys = null,
    string[] ApiProducts = null,
    string[] Asns = null,
    string[] BotReasons = null,
    string[] DeveloperApps = null,
    string[] Developers = null,
    string[] HttpMethods = null,
    string[] IpAddressRanges = null,
    string[] RegionCodes = null,
    string[] UserAgents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.accessTokens">AccessTokens</a></code> | <code>string[]</code> | A list of accessTokens. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiKeys">ApiKeys</a></code> | <code>string[]</code> | A list of API keys. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiProducts">ApiProducts</a></code> | <code>string[]</code> | A list of API Products. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.asns">Asns</a></code> | <code>string[]</code> | A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.botReasons">BotReasons</a></code> | <code>string[]</code> | A list of Bot Reasons. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developerApps">DeveloperApps</a></code> | <code>string[]</code> | A list of developer apps. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developers">Developers</a></code> | <code>string[]</code> | A list of developers. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.httpMethods">HttpMethods</a></code> | <code>string[]</code> | Act only on particular HTTP methods. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.ipAddressRanges">IpAddressRanges</a></code> | <code>string[]</code> | A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.regionCodes">RegionCodes</a></code> | <code>string[]</code> | A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.userAgents">UserAgents</a></code> | <code>string[]</code> | A list of user agents to deny. We look for exact matches. Limit 50 per action. |

---

##### `AccessTokens`<sup>Optional</sup> <a name="AccessTokens" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.accessTokens"></a>

```csharp
public string[] AccessTokens { get; set; }
```

- *Type:* string[]

A list of accessTokens. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#access_tokens GoogleApigeeSecurityAction#access_tokens}

---

##### `ApiKeys`<sup>Optional</sup> <a name="ApiKeys" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiKeys"></a>

```csharp
public string[] ApiKeys { get; set; }
```

- *Type:* string[]

A list of API keys. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#api_keys GoogleApigeeSecurityAction#api_keys}

---

##### `ApiProducts`<sup>Optional</sup> <a name="ApiProducts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiProducts"></a>

```csharp
public string[] ApiProducts { get; set; }
```

- *Type:* string[]

A list of API Products. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#api_products GoogleApigeeSecurityAction#api_products}

---

##### `Asns`<sup>Optional</sup> <a name="Asns" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.asns"></a>

```csharp
public string[] Asns { get; set; }
```

- *Type:* string[]

A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#asns GoogleApigeeSecurityAction#asns}

---

##### `BotReasons`<sup>Optional</sup> <a name="BotReasons" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.botReasons"></a>

```csharp
public string[] BotReasons { get; set; }
```

- *Type:* string[]

A list of Bot Reasons.

Current options: Flooder, Brute Guessor, Static Content Scraper,
OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper,
Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#bot_reasons GoogleApigeeSecurityAction#bot_reasons}

---

##### `DeveloperApps`<sup>Optional</sup> <a name="DeveloperApps" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developerApps"></a>

```csharp
public string[] DeveloperApps { get; set; }
```

- *Type:* string[]

A list of developer apps. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#developer_apps GoogleApigeeSecurityAction#developer_apps}

---

##### `Developers`<sup>Optional</sup> <a name="Developers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developers"></a>

```csharp
public string[] Developers { get; set; }
```

- *Type:* string[]

A list of developers. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#developers GoogleApigeeSecurityAction#developers}

---

##### `HttpMethods`<sup>Optional</sup> <a name="HttpMethods" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.httpMethods"></a>

```csharp
public string[] HttpMethods { get; set; }
```

- *Type:* string[]

Act only on particular HTTP methods.

E.g. A read-only API can block POST/PUT/DELETE methods.
Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#http_methods GoogleApigeeSecurityAction#http_methods}

---

##### `IpAddressRanges`<sup>Optional</sup> <a name="IpAddressRanges" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.ipAddressRanges"></a>

```csharp
public string[] IpAddressRanges { get; set; }
```

- *Type:* string[]

A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#ip_address_ranges GoogleApigeeSecurityAction#ip_address_ranges}

---

##### `RegionCodes`<sup>Optional</sup> <a name="RegionCodes" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.regionCodes"></a>

```csharp
public string[] RegionCodes { get; set; }
```

- *Type:* string[]

A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#region_codes GoogleApigeeSecurityAction#region_codes}

---

##### `UserAgents`<sup>Optional</sup> <a name="UserAgents" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.userAgents"></a>

```csharp
public string[] UserAgents { get; set; }
```

- *Type:* string[]

A list of user agents to deny. We look for exact matches. Limit 50 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#user_agents GoogleApigeeSecurityAction#user_agents}

---

### GoogleApigeeSecurityActionConfig <a name="GoogleApigeeSecurityActionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleApigeeSecurityActionConditionConfig ConditionConfig,
    string EnvId,
    string OrgId,
    string SecurityActionId,
    string State,
    GoogleApigeeSecurityActionAllow Allow = null,
    string[] ApiProxies = null,
    GoogleApigeeSecurityActionDeny Deny = null,
    string Description = null,
    string ExpireTime = null,
    GoogleApigeeSecurityActionFlag Flag = null,
    string Id = null,
    GoogleApigeeSecurityActionTimeouts Timeouts = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.conditionConfig">ConditionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a></code> | condition_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.envId">EnvId</a></code> | <code>string</code> | The Apigee environment that this security action applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.orgId">OrgId</a></code> | <code>string</code> | The organization that this security action applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.securityActionId">SecurityActionId</a></code> | <code>string</code> | The ID to use for the SecurityAction, which will become the final component of the action's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.state">State</a></code> | <code>string</code> | Only an ENABLED SecurityAction is enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.apiProxies">ApiProxies</a></code> | <code>string[]</code> | If unset, this would apply to all proxies in the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.description">Description</a></code> | <code>string</code> | An optional user provided description of the SecurityAction. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.expireTime">ExpireTime</a></code> | <code>string</code> | The expiration for this SecurityAction. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.flag">Flag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a></code> | flag block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#id GoogleApigeeSecurityAction#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.ttl">Ttl</a></code> | <code>string</code> | The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConditionConfig`<sup>Required</sup> <a name="ConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.conditionConfig"></a>

```csharp
public GoogleApigeeSecurityActionConditionConfig ConditionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

condition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#condition_config GoogleApigeeSecurityAction#condition_config}

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.envId"></a>

```csharp
public string EnvId { get; set; }
```

- *Type:* string

The Apigee environment that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#env_id GoogleApigeeSecurityAction#env_id}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The organization that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#org_id GoogleApigeeSecurityAction#org_id}

---

##### `SecurityActionId`<sup>Required</sup> <a name="SecurityActionId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.securityActionId"></a>

```csharp
public string SecurityActionId { get; set; }
```

- *Type:* string

The ID to use for the SecurityAction, which will become the final component of the action's resource name.

This value should be 0-61 characters, and valid format is (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#security_action_id GoogleApigeeSecurityAction#security_action_id}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Only an ENABLED SecurityAction is enforced.

An ENABLED SecurityAction past its expiration time will not be enforced. Possible values: ["ENABLED", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#state GoogleApigeeSecurityAction#state}

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.allow"></a>

```csharp
public GoogleApigeeSecurityActionAllow Allow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#allow GoogleApigeeSecurityAction#allow}

---

##### `ApiProxies`<sup>Optional</sup> <a name="ApiProxies" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.apiProxies"></a>

```csharp
public string[] ApiProxies { get; set; }
```

- *Type:* string[]

If unset, this would apply to all proxies in the environment.

If set, this action is enforced only if at least one proxy in the repeated
list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions.
There can be at most 100 enabled actions with proxies set in an env.
Several other restrictions apply on conditions and are detailed later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#api_proxies GoogleApigeeSecurityAction#api_proxies}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.deny"></a>

```csharp
public GoogleApigeeSecurityActionDeny Deny { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#deny GoogleApigeeSecurityAction#deny}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional user provided description of the SecurityAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#description GoogleApigeeSecurityAction#description}

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.expireTime"></a>

```csharp
public string ExpireTime { get; set; }
```

- *Type:* string

The expiration for this SecurityAction.

Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9
fractional digits. Offsets other than "Z" are also accepted.
Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#expire_time GoogleApigeeSecurityAction#expire_time}

---

##### `Flag`<sup>Optional</sup> <a name="Flag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.flag"></a>

```csharp
public GoogleApigeeSecurityActionFlag Flag { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#flag GoogleApigeeSecurityAction#flag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#id GoogleApigeeSecurityAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.timeouts"></a>

```csharp
public GoogleApigeeSecurityActionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#timeouts GoogleApigeeSecurityAction#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#ttl GoogleApigeeSecurityAction#ttl}

---

### GoogleApigeeSecurityActionDeny <a name="GoogleApigeeSecurityActionDeny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionDeny {
    double ResponseCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny.property.responseCode">ResponseCode</a></code> | <code>double</code> | The HTTP response code if the Action = DENY. |

---

##### `ResponseCode`<sup>Optional</sup> <a name="ResponseCode" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny.property.responseCode"></a>

```csharp
public double ResponseCode { get; set; }
```

- *Type:* double

The HTTP response code if the Action = DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#response_code GoogleApigeeSecurityAction#response_code}

---

### GoogleApigeeSecurityActionFlag <a name="GoogleApigeeSecurityActionFlag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionFlag {
    object Headers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag.property.headers">Headers</a></code> | <code>object</code> | headers block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#headers GoogleApigeeSecurityAction#headers}

---

### GoogleApigeeSecurityActionFlagHeaders <a name="GoogleApigeeSecurityActionFlagHeaders" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionFlagHeaders {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.name">Name</a></code> | <code>string</code> | The header name to be sent to the target. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.value">Value</a></code> | <code>string</code> | The header value to be sent to the target. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The header name to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#name GoogleApigeeSecurityAction#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The header value to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#value GoogleApigeeSecurityAction#value}

---

### GoogleApigeeSecurityActionTimeouts <a name="GoogleApigeeSecurityActionTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#create GoogleApigeeSecurityAction#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#delete GoogleApigeeSecurityAction#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#create GoogleApigeeSecurityAction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#delete GoogleApigeeSecurityAction#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeSecurityActionAllowOutputReference <a name="GoogleApigeeSecurityActionAllowOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionAllowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.internalValue"></a>

```csharp
public GoogleApigeeSecurityActionAllow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

---


### GoogleApigeeSecurityActionConditionConfigOutputReference <a name="GoogleApigeeSecurityActionConditionConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionConditionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens">ResetAccessTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiKeys">ResetApiKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiProducts">ResetApiProducts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAsns">ResetAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetBotReasons">ResetBotReasons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps">ResetDeveloperApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDevelopers">ResetDevelopers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods">ResetHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges">ResetIpAddressRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes">ResetRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetUserAgents">ResetUserAgents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessTokens` <a name="ResetAccessTokens" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens"></a>

```csharp
private void ResetAccessTokens()
```

##### `ResetApiKeys` <a name="ResetApiKeys" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiKeys"></a>

```csharp
private void ResetApiKeys()
```

##### `ResetApiProducts` <a name="ResetApiProducts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiProducts"></a>

```csharp
private void ResetApiProducts()
```

##### `ResetAsns` <a name="ResetAsns" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAsns"></a>

```csharp
private void ResetAsns()
```

##### `ResetBotReasons` <a name="ResetBotReasons" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetBotReasons"></a>

```csharp
private void ResetBotReasons()
```

##### `ResetDeveloperApps` <a name="ResetDeveloperApps" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps"></a>

```csharp
private void ResetDeveloperApps()
```

##### `ResetDevelopers` <a name="ResetDevelopers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDevelopers"></a>

```csharp
private void ResetDevelopers()
```

##### `ResetHttpMethods` <a name="ResetHttpMethods" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods"></a>

```csharp
private void ResetHttpMethods()
```

##### `ResetIpAddressRanges` <a name="ResetIpAddressRanges" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges"></a>

```csharp
private void ResetIpAddressRanges()
```

##### `ResetRegionCodes` <a name="ResetRegionCodes" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes"></a>

```csharp
private void ResetRegionCodes()
```

##### `ResetUserAgents` <a name="ResetUserAgents" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetUserAgents"></a>

```csharp
private void ResetUserAgents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput">AccessTokensInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput">ApiKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput">ApiProductsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asnsInput">AsnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput">BotReasonsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput">DeveloperAppsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developersInput">DevelopersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput">HttpMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput">IpAddressRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput">RegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput">UserAgentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokens">AccessTokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeys">ApiKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProducts">ApiProducts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asns">Asns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasons">BotReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerApps">DeveloperApps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developers">Developers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethods">HttpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges">IpAddressRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodes">RegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgents">UserAgents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokensInput`<sup>Optional</sup> <a name="AccessTokensInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput"></a>

```csharp
public string[] AccessTokensInput { get; }
```

- *Type:* string[]

---

##### `ApiKeysInput`<sup>Optional</sup> <a name="ApiKeysInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput"></a>

```csharp
public string[] ApiKeysInput { get; }
```

- *Type:* string[]

---

##### `ApiProductsInput`<sup>Optional</sup> <a name="ApiProductsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput"></a>

```csharp
public string[] ApiProductsInput { get; }
```

- *Type:* string[]

---

##### `AsnsInput`<sup>Optional</sup> <a name="AsnsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asnsInput"></a>

```csharp
public string[] AsnsInput { get; }
```

- *Type:* string[]

---

##### `BotReasonsInput`<sup>Optional</sup> <a name="BotReasonsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput"></a>

```csharp
public string[] BotReasonsInput { get; }
```

- *Type:* string[]

---

##### `DeveloperAppsInput`<sup>Optional</sup> <a name="DeveloperAppsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput"></a>

```csharp
public string[] DeveloperAppsInput { get; }
```

- *Type:* string[]

---

##### `DevelopersInput`<sup>Optional</sup> <a name="DevelopersInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developersInput"></a>

```csharp
public string[] DevelopersInput { get; }
```

- *Type:* string[]

---

##### `HttpMethodsInput`<sup>Optional</sup> <a name="HttpMethodsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput"></a>

```csharp
public string[] HttpMethodsInput { get; }
```

- *Type:* string[]

---

##### `IpAddressRangesInput`<sup>Optional</sup> <a name="IpAddressRangesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput"></a>

```csharp
public string[] IpAddressRangesInput { get; }
```

- *Type:* string[]

---

##### `RegionCodesInput`<sup>Optional</sup> <a name="RegionCodesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput"></a>

```csharp
public string[] RegionCodesInput { get; }
```

- *Type:* string[]

---

##### `UserAgentsInput`<sup>Optional</sup> <a name="UserAgentsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput"></a>

```csharp
public string[] UserAgentsInput { get; }
```

- *Type:* string[]

---

##### `AccessTokens`<sup>Required</sup> <a name="AccessTokens" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokens"></a>

```csharp
public string[] AccessTokens { get; }
```

- *Type:* string[]

---

##### `ApiKeys`<sup>Required</sup> <a name="ApiKeys" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeys"></a>

```csharp
public string[] ApiKeys { get; }
```

- *Type:* string[]

---

##### `ApiProducts`<sup>Required</sup> <a name="ApiProducts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProducts"></a>

```csharp
public string[] ApiProducts { get; }
```

- *Type:* string[]

---

##### `Asns`<sup>Required</sup> <a name="Asns" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asns"></a>

```csharp
public string[] Asns { get; }
```

- *Type:* string[]

---

##### `BotReasons`<sup>Required</sup> <a name="BotReasons" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasons"></a>

```csharp
public string[] BotReasons { get; }
```

- *Type:* string[]

---

##### `DeveloperApps`<sup>Required</sup> <a name="DeveloperApps" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerApps"></a>

```csharp
public string[] DeveloperApps { get; }
```

- *Type:* string[]

---

##### `Developers`<sup>Required</sup> <a name="Developers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developers"></a>

```csharp
public string[] Developers { get; }
```

- *Type:* string[]

---

##### `HttpMethods`<sup>Required</sup> <a name="HttpMethods" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethods"></a>

```csharp
public string[] HttpMethods { get; }
```

- *Type:* string[]

---

##### `IpAddressRanges`<sup>Required</sup> <a name="IpAddressRanges" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges"></a>

```csharp
public string[] IpAddressRanges { get; }
```

- *Type:* string[]

---

##### `RegionCodes`<sup>Required</sup> <a name="RegionCodes" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodes"></a>

```csharp
public string[] RegionCodes { get; }
```

- *Type:* string[]

---

##### `UserAgents`<sup>Required</sup> <a name="UserAgents" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgents"></a>

```csharp
public string[] UserAgents { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleApigeeSecurityActionConditionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

---


### GoogleApigeeSecurityActionDenyOutputReference <a name="GoogleApigeeSecurityActionDenyOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionDenyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resetResponseCode">ResetResponseCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResponseCode` <a name="ResetResponseCode" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resetResponseCode"></a>

```csharp
private void ResetResponseCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCodeInput">ResponseCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCode">ResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResponseCodeInput`<sup>Optional</sup> <a name="ResponseCodeInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCodeInput"></a>

```csharp
public double ResponseCodeInput { get; }
```

- *Type:* double

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCode"></a>

```csharp
public double ResponseCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.internalValue"></a>

```csharp
public GoogleApigeeSecurityActionDeny InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

---


### GoogleApigeeSecurityActionFlagHeadersList <a name="GoogleApigeeSecurityActionFlagHeadersList" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionFlagHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.get"></a>

```csharp
private GoogleApigeeSecurityActionFlagHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApigeeSecurityActionFlagHeadersOutputReference <a name="GoogleApigeeSecurityActionFlagHeadersOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionFlagHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApigeeSecurityActionFlagOutputReference <a name="GoogleApigeeSecurityActionFlagOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionFlagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList">GoogleApigeeSecurityActionFlagHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headers"></a>

```csharp
public GoogleApigeeSecurityActionFlagHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList">GoogleApigeeSecurityActionFlagHeadersList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.internalValue"></a>

```csharp
public GoogleApigeeSecurityActionFlag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

---


### GoogleApigeeSecurityActionTimeoutsOutputReference <a name="GoogleApigeeSecurityActionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeSecurityActionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



