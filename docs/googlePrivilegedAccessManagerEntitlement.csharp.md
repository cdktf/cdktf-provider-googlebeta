# `googlePrivilegedAccessManagerEntitlement` Submodule <a name="`googlePrivilegedAccessManagerEntitlement` Submodule" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivilegedAccessManagerEntitlement <a name="GooglePrivilegedAccessManagerEntitlement" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement google_privileged_access_manager_entitlement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlement(Construct Scope, string Id, GooglePrivilegedAccessManagerEntitlementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig">GooglePrivilegedAccessManagerEntitlementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig">GooglePrivilegedAccessManagerEntitlementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets">PutAdditionalNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putApprovalWorkflow">PutApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putEligibleUsers">PutEligibleUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putPrivilegedAccess">PutPrivilegedAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putRequesterJustificationConfig">PutRequesterJustificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetAdditionalNotificationTargets">ResetAdditionalNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetApprovalWorkflow">ResetApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalNotificationTargets` <a name="PutAdditionalNotificationTargets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets"></a>

```csharp
private void PutAdditionalNotificationTargets(GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---

##### `PutApprovalWorkflow` <a name="PutApprovalWorkflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putApprovalWorkflow"></a>

```csharp
private void PutApprovalWorkflow(GooglePrivilegedAccessManagerEntitlementApprovalWorkflow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putApprovalWorkflow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---

##### `PutEligibleUsers` <a name="PutEligibleUsers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putEligibleUsers"></a>

```csharp
private void PutEligibleUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putEligibleUsers.parameter.value"></a>

- *Type:* object

---

##### `PutPrivilegedAccess` <a name="PutPrivilegedAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putPrivilegedAccess"></a>

```csharp
private void PutPrivilegedAccess(GooglePrivilegedAccessManagerEntitlementPrivilegedAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putPrivilegedAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---

##### `PutRequesterJustificationConfig` <a name="PutRequesterJustificationConfig" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putRequesterJustificationConfig"></a>

```csharp
private void PutRequesterJustificationConfig(GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putRequesterJustificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putTimeouts"></a>

```csharp
private void PutTimeouts(GooglePrivilegedAccessManagerEntitlementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a>

---

##### `ResetAdditionalNotificationTargets` <a name="ResetAdditionalNotificationTargets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetAdditionalNotificationTargets"></a>

```csharp
private void ResetAdditionalNotificationTargets()
```

##### `ResetApprovalWorkflow` <a name="ResetApprovalWorkflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetApprovalWorkflow"></a>

```csharp
private void ResetApprovalWorkflow()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePrivilegedAccessManagerEntitlement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePrivilegedAccessManagerEntitlement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePrivilegedAccessManagerEntitlement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePrivilegedAccessManagerEntitlement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GooglePrivilegedAccessManagerEntitlement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GooglePrivilegedAccessManagerEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GooglePrivilegedAccessManagerEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargets">AdditionalNotificationTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.approvalWorkflow">ApprovalWorkflow</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.eligibleUsers">EligibleUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList">GooglePrivilegedAccessManagerEntitlementEligibleUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.privilegedAccess">PrivilegedAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfig">RequesterJustificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference">GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargetsInput">AdditionalNotificationTargetsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.approvalWorkflowInput">ApprovalWorkflowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.eligibleUsersInput">EligibleUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.entitlementIdInput">EntitlementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.maxRequestDurationInput">MaxRequestDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.privilegedAccessInput">PrivilegedAccessInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfigInput">RequesterJustificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.maxRequestDuration">MaxRequestDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdditionalNotificationTargets`<sup>Required</sup> <a name="AdditionalNotificationTargets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargets"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference AdditionalNotificationTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference</a>

---

##### `ApprovalWorkflow`<sup>Required</sup> <a name="ApprovalWorkflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.approvalWorkflow"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference ApprovalWorkflow { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EligibleUsers`<sup>Required</sup> <a name="EligibleUsers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.eligibleUsers"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementEligibleUsersList EligibleUsers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList">GooglePrivilegedAccessManagerEntitlementEligibleUsersList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivilegedAccess`<sup>Required</sup> <a name="PrivilegedAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.privilegedAccess"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference PrivilegedAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference</a>

---

##### `RequesterJustificationConfig`<sup>Required</sup> <a name="RequesterJustificationConfig" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfig"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference RequesterJustificationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.timeouts"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference">GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AdditionalNotificationTargetsInput`<sup>Optional</sup> <a name="AdditionalNotificationTargetsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargetsInput"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets AdditionalNotificationTargetsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---

##### `ApprovalWorkflowInput`<sup>Optional</sup> <a name="ApprovalWorkflowInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.approvalWorkflowInput"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflow ApprovalWorkflowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---

##### `EligibleUsersInput`<sup>Optional</sup> <a name="EligibleUsersInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.eligibleUsersInput"></a>

```csharp
public object EligibleUsersInput { get; }
```

- *Type:* object

---

##### `EntitlementIdInput`<sup>Optional</sup> <a name="EntitlementIdInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.entitlementIdInput"></a>

```csharp
public string EntitlementIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaxRequestDurationInput`<sup>Optional</sup> <a name="MaxRequestDurationInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.maxRequestDurationInput"></a>

```csharp
public string MaxRequestDurationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `PrivilegedAccessInput`<sup>Optional</sup> <a name="PrivilegedAccessInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.privilegedAccessInput"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccess PrivilegedAccessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---

##### `RequesterJustificationConfigInput`<sup>Optional</sup> <a name="RequesterJustificationConfigInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfigInput"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig RequesterJustificationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaxRequestDuration`<sup>Required</sup> <a name="MaxRequestDuration" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.maxRequestDuration"></a>

```csharp
public string MaxRequestDuration { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets <a name="GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets {
    string[] AdminEmailRecipients = null,
    string[] RequesterEmailRecipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.adminEmailRecipients">AdminEmailRecipients</a></code> | <code>string[]</code> | Optional. Additional email addresses to be notified when a principal(requester) is granted access. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.requesterEmailRecipients">RequesterEmailRecipients</a></code> | <code>string[]</code> | Optional. Additional email address to be notified about an eligible entitlement. |

---

##### `AdminEmailRecipients`<sup>Optional</sup> <a name="AdminEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.adminEmailRecipients"></a>

```csharp
public string[] AdminEmailRecipients { get; set; }
```

- *Type:* string[]

Optional. Additional email addresses to be notified when a principal(requester) is granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#admin_email_recipients GooglePrivilegedAccessManagerEntitlement#admin_email_recipients}

---

##### `RequesterEmailRecipients`<sup>Optional</sup> <a name="RequesterEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.requesterEmailRecipients"></a>

```csharp
public string[] RequesterEmailRecipients { get; set; }
```

- *Type:* string[]

Optional. Additional email address to be notified about an eligible entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#requester_email_recipients GooglePrivilegedAccessManagerEntitlement#requester_email_recipients}

---

### GooglePrivilegedAccessManagerEntitlementApprovalWorkflow <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflow {
    GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals ManualApprovals
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow.property.manualApprovals">ManualApprovals</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | manual_approvals block. |

---

##### `ManualApprovals`<sup>Required</sup> <a name="ManualApprovals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow.property.manualApprovals"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals ManualApprovals { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

manual_approvals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#manual_approvals GooglePrivilegedAccessManagerEntitlement#manual_approvals}

---

### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals {
    object Steps,
    object RequireApproverJustification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.steps">Steps</a></code> | <code>object</code> | steps block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.requireApproverJustification">RequireApproverJustification</a></code> | <code>object</code> | Optional. Do the approvers need to provide a justification for their actions? |

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.steps"></a>

```csharp
public object Steps { get; set; }
```

- *Type:* object

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#steps GooglePrivilegedAccessManagerEntitlement#steps}

---

##### `RequireApproverJustification`<sup>Optional</sup> <a name="RequireApproverJustification" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.requireApproverJustification"></a>

```csharp
public object RequireApproverJustification { get; set; }
```

- *Type:* object

Optional. Do the approvers need to provide a justification for their actions?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#require_approver_justification GooglePrivilegedAccessManagerEntitlement#require_approver_justification}

---

### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps {
    GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers Approvers,
    double ApprovalsNeeded = null,
    string[] ApproverEmailRecipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvers">Approvers</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | approvers block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvalsNeeded">ApprovalsNeeded</a></code> | <code>double</code> | How many users from the above list need to approve. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approverEmailRecipients">ApproverEmailRecipients</a></code> | <code>string[]</code> | Optional. Additional email addresses to be notified when a grant is pending approval. |

---

##### `Approvers`<sup>Required</sup> <a name="Approvers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvers"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers Approvers { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

approvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#approvers GooglePrivilegedAccessManagerEntitlement#approvers}

---

##### `ApprovalsNeeded`<sup>Optional</sup> <a name="ApprovalsNeeded" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvalsNeeded"></a>

```csharp
public double ApprovalsNeeded { get; set; }
```

- *Type:* double

How many users from the above list need to approve.

If there are not enough distinct users in the list above then the workflow
will indefinitely block. Should always be greater than 0. Currently 1 is the only
supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#approvals_needed GooglePrivilegedAccessManagerEntitlement#approvals_needed}

---

##### `ApproverEmailRecipients`<sup>Optional</sup> <a name="ApproverEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approverEmailRecipients"></a>

```csharp
public string[] ApproverEmailRecipients { get; set; }
```

- *Type:* string[]

Optional. Additional email addresses to be notified when a grant is pending approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#approver_email_recipients GooglePrivilegedAccessManagerEntitlement#approver_email_recipients}

---

### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers {
    string[] Principals
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.property.principals">Principals</a></code> | <code>string[]</code> | Users who are being allowed for the operation. |

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.property.principals"></a>

```csharp
public string[] Principals { get; set; }
```

- *Type:* string[]

Users who are being allowed for the operation.

Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at: https://cloud.google.com/iam/docs/principal-identifiers#v1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#principals GooglePrivilegedAccessManagerEntitlement#principals}

---

### GooglePrivilegedAccessManagerEntitlementConfig <a name="GooglePrivilegedAccessManagerEntitlementConfig" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object EligibleUsers,
    string EntitlementId,
    string Location,
    string MaxRequestDuration,
    string Parent,
    GooglePrivilegedAccessManagerEntitlementPrivilegedAccess PrivilegedAccess,
    GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig RequesterJustificationConfig,
    GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets AdditionalNotificationTargets = null,
    GooglePrivilegedAccessManagerEntitlementApprovalWorkflow ApprovalWorkflow = null,
    string Id = null,
    GooglePrivilegedAccessManagerEntitlementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.eligibleUsers">EligibleUsers</a></code> | <code>object</code> | eligible_users block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.entitlementId">EntitlementId</a></code> | <code>string</code> | The ID to use for this Entitlement. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.location">Location</a></code> | <code>string</code> | The region of the Entitlement resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.maxRequestDuration">MaxRequestDuration</a></code> | <code>string</code> | The maximum amount of time for which access would be granted for a request. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.parent">Parent</a></code> | <code>string</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.privilegedAccess">PrivilegedAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | privileged_access block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.requesterJustificationConfig">RequesterJustificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | requester_justification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.additionalNotificationTargets">AdditionalNotificationTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | additional_notification_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.approvalWorkflow">ApprovalWorkflow</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | approval_workflow block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#id GooglePrivilegedAccessManagerEntitlement#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EligibleUsers`<sup>Required</sup> <a name="EligibleUsers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.eligibleUsers"></a>

```csharp
public object EligibleUsers { get; set; }
```

- *Type:* object

eligible_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#eligible_users GooglePrivilegedAccessManagerEntitlement#eligible_users}

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.entitlementId"></a>

```csharp
public string EntitlementId { get; set; }
```

- *Type:* string

The ID to use for this Entitlement.

This will become the last part of the resource name.
This value should be 4-63 characters, and valid characters are "[a-z]", "[0-9]", and "-". The first character should be from [a-z].
This value should be unique among all other Entitlements under the specified 'parent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#entitlement_id GooglePrivilegedAccessManagerEntitlement#entitlement_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The region of the Entitlement resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#location GooglePrivilegedAccessManagerEntitlement#location}

---

##### `MaxRequestDuration`<sup>Required</sup> <a name="MaxRequestDuration" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.maxRequestDuration"></a>

```csharp
public string MaxRequestDuration { get; set; }
```

- *Type:* string

The maximum amount of time for which access would be granted for a request.

A requester can choose to ask for access for less than this duration but never more.
Format: calculate the time in seconds and concatenate it with 's' i.e. 2 hours = "7200s", 45 minutes = "2700s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#max_request_duration GooglePrivilegedAccessManagerEntitlement#max_request_duration}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#parent GooglePrivilegedAccessManagerEntitlement#parent}

---

##### `PrivilegedAccess`<sup>Required</sup> <a name="PrivilegedAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.privilegedAccess"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccess PrivilegedAccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

privileged_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#privileged_access GooglePrivilegedAccessManagerEntitlement#privileged_access}

---

##### `RequesterJustificationConfig`<sup>Required</sup> <a name="RequesterJustificationConfig" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.requesterJustificationConfig"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig RequesterJustificationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

requester_justification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#requester_justification_config GooglePrivilegedAccessManagerEntitlement#requester_justification_config}

---

##### `AdditionalNotificationTargets`<sup>Optional</sup> <a name="AdditionalNotificationTargets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.additionalNotificationTargets"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets AdditionalNotificationTargets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

additional_notification_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#additional_notification_targets GooglePrivilegedAccessManagerEntitlement#additional_notification_targets}

---

##### `ApprovalWorkflow`<sup>Optional</sup> <a name="ApprovalWorkflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.approvalWorkflow"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflow ApprovalWorkflow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

approval_workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#approval_workflow GooglePrivilegedAccessManagerEntitlement#approval_workflow}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#id GooglePrivilegedAccessManagerEntitlement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.timeouts"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#timeouts GooglePrivilegedAccessManagerEntitlement#timeouts}

---

### GooglePrivilegedAccessManagerEntitlementEligibleUsers <a name="GooglePrivilegedAccessManagerEntitlementEligibleUsers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementEligibleUsers {
    string[] Principals
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers.property.principals">Principals</a></code> | <code>string[]</code> | Users who are being allowed for the operation. |

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers.property.principals"></a>

```csharp
public string[] Principals { get; set; }
```

- *Type:* string[]

Users who are being allowed for the operation.

Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at "https://cloud.google.com/iam/docs/principal-identifiers#v1"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#principals GooglePrivilegedAccessManagerEntitlement#principals}

---

### GooglePrivilegedAccessManagerEntitlementPrivilegedAccess <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementPrivilegedAccess {
    GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess GcpIamAccess
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess.property.gcpIamAccess">GcpIamAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | gcp_iam_access block. |

---

##### `GcpIamAccess`<sup>Required</sup> <a name="GcpIamAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess.property.gcpIamAccess"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess GcpIamAccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

gcp_iam_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#gcp_iam_access GooglePrivilegedAccessManagerEntitlement#gcp_iam_access}

---

### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess {
    string Resource,
    string ResourceType,
    object RoleBindings
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resource">Resource</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resourceType">ResourceType</a></code> | <code>string</code> | The type of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.roleBindings">RoleBindings</a></code> | <code>object</code> | role_bindings block. |

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#resource GooglePrivilegedAccessManagerEntitlement#resource}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

The type of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#resource_type GooglePrivilegedAccessManagerEntitlement#resource_type}

---

##### `RoleBindings`<sup>Required</sup> <a name="RoleBindings" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.roleBindings"></a>

```csharp
public object RoleBindings { get; set; }
```

- *Type:* object

role_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#role_bindings GooglePrivilegedAccessManagerEntitlement#role_bindings}

---

### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings {
    string Role,
    string ConditionExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.role">Role</a></code> | <code>string</code> | IAM role to be granted. https://cloud.google.com/iam/docs/roles-overview. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.conditionExpression">ConditionExpression</a></code> | <code>string</code> | The expression field of the IAM condition to be associated with the role. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

IAM role to be granted. https://cloud.google.com/iam/docs/roles-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#role GooglePrivilegedAccessManagerEntitlement#role}

---

##### `ConditionExpression`<sup>Optional</sup> <a name="ConditionExpression" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.conditionExpression"></a>

```csharp
public string ConditionExpression { get; set; }
```

- *Type:* string

The expression field of the IAM condition to be associated with the role.

If specified, a user with an active grant for this entitlement would be able to access the resource only if this condition evaluates to true for their request.
https://cloud.google.com/iam/docs/conditions-overview#attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#condition_expression GooglePrivilegedAccessManagerEntitlement#condition_expression}

---

### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig {
    GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory NotMandatory = null,
    GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured Unstructured = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.notMandatory">NotMandatory</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | not_mandatory block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.unstructured">Unstructured</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | unstructured block. |

---

##### `NotMandatory`<sup>Optional</sup> <a name="NotMandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.notMandatory"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory NotMandatory { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

not_mandatory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#not_mandatory GooglePrivilegedAccessManagerEntitlement#not_mandatory}

---

##### `Unstructured`<sup>Optional</sup> <a name="Unstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.unstructured"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured Unstructured { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

unstructured block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#unstructured GooglePrivilegedAccessManagerEntitlement#unstructured}

---

### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory {

};
```


### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured {

};
```


### GooglePrivilegedAccessManagerEntitlementTimeouts <a name="GooglePrivilegedAccessManagerEntitlementTimeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#create GooglePrivilegedAccessManagerEntitlement#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#delete GooglePrivilegedAccessManagerEntitlement#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#update GooglePrivilegedAccessManagerEntitlement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#create GooglePrivilegedAccessManagerEntitlement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#delete GooglePrivilegedAccessManagerEntitlement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#update GooglePrivilegedAccessManagerEntitlement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetAdminEmailRecipients">ResetAdminEmailRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetRequesterEmailRecipients">ResetRequesterEmailRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminEmailRecipients` <a name="ResetAdminEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetAdminEmailRecipients"></a>

```csharp
private void ResetAdminEmailRecipients()
```

##### `ResetRequesterEmailRecipients` <a name="ResetRequesterEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetRequesterEmailRecipients"></a>

```csharp
private void ResetRequesterEmailRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipientsInput">AdminEmailRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipientsInput">RequesterEmailRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients">AdminEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients">RequesterEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminEmailRecipientsInput`<sup>Optional</sup> <a name="AdminEmailRecipientsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipientsInput"></a>

```csharp
public string[] AdminEmailRecipientsInput { get; }
```

- *Type:* string[]

---

##### `RequesterEmailRecipientsInput`<sup>Optional</sup> <a name="RequesterEmailRecipientsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipientsInput"></a>

```csharp
public string[] RequesterEmailRecipientsInput { get; }
```

- *Type:* string[]

---

##### `AdminEmailRecipients`<sup>Required</sup> <a name="AdminEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients"></a>

```csharp
public string[] AdminEmailRecipients { get; }
```

- *Type:* string[]

---

##### `RequesterEmailRecipients`<sup>Required</sup> <a name="RequesterEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients"></a>

```csharp
public string[] RequesterEmailRecipients { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resetRequireApproverJustification">ResetRequireApproverJustification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps"></a>

```csharp
private void PutSteps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps.parameter.value"></a>

- *Type:* object

---

##### `ResetRequireApproverJustification` <a name="ResetRequireApproverJustification" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resetRequireApproverJustification"></a>

```csharp
private void ResetRequireApproverJustification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustificationInput">RequireApproverJustificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.stepsInput">StepsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification">RequireApproverJustification</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList Steps { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a>

---

##### `RequireApproverJustificationInput`<sup>Optional</sup> <a name="RequireApproverJustificationInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustificationInput"></a>

```csharp
public object RequireApproverJustificationInput { get; }
```

- *Type:* object

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.stepsInput"></a>

```csharp
public object StepsInput { get; }
```

- *Type:* object

---

##### `RequireApproverJustification`<sup>Required</sup> <a name="RequireApproverJustification" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification"></a>

```csharp
public object RequireApproverJustification { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principalsInput"></a>

```csharp
public string[] PrincipalsInput { get; }
```

- *Type:* string[]

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get"></a>

```csharp
private GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers">PutApprovers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApprovalsNeeded">ResetApprovalsNeeded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApproverEmailRecipients">ResetApproverEmailRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApprovers` <a name="PutApprovers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers"></a>

```csharp
private void PutApprovers(GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---

##### `ResetApprovalsNeeded` <a name="ResetApprovalsNeeded" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApprovalsNeeded"></a>

```csharp
private void ResetApprovalsNeeded()
```

##### `ResetApproverEmailRecipients` <a name="ResetApproverEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApproverEmailRecipients"></a>

```csharp
private void ResetApproverEmailRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers">Approvers</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeededInput">ApprovalsNeededInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipientsInput">ApproverEmailRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approversInput">ApproversInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded">ApprovalsNeeded</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients">ApproverEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Approvers`<sup>Required</sup> <a name="Approvers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference Approvers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference</a>

---

##### `ApprovalsNeededInput`<sup>Optional</sup> <a name="ApprovalsNeededInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeededInput"></a>

```csharp
public double ApprovalsNeededInput { get; }
```

- *Type:* double

---

##### `ApproverEmailRecipientsInput`<sup>Optional</sup> <a name="ApproverEmailRecipientsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipientsInput"></a>

```csharp
public string[] ApproverEmailRecipientsInput { get; }
```

- *Type:* string[]

---

##### `ApproversInput`<sup>Optional</sup> <a name="ApproversInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approversInput"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers ApproversInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---

##### `ApprovalsNeeded`<sup>Required</sup> <a name="ApprovalsNeeded" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded"></a>

```csharp
public double ApprovalsNeeded { get; }
```

- *Type:* double

---

##### `ApproverEmailRecipients`<sup>Required</sup> <a name="ApproverEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients"></a>

```csharp
public string[] ApproverEmailRecipients { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals">PutManualApprovals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManualApprovals` <a name="PutManualApprovals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals"></a>

```csharp
private void PutManualApprovals(GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals">ManualApprovals</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovalsInput">ManualApprovalsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManualApprovals`<sup>Required</sup> <a name="ManualApprovals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference ManualApprovals { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference</a>

---

##### `ManualApprovalsInput`<sup>Optional</sup> <a name="ManualApprovalsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovalsInput"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals ManualApprovalsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---


### GooglePrivilegedAccessManagerEntitlementEligibleUsersList <a name="GooglePrivilegedAccessManagerEntitlementEligibleUsersList" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementEligibleUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.get"></a>

```csharp
private GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference <a name="GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principalsInput"></a>

```csharp
public string[] PrincipalsInput { get; }
```

- *Type:* string[]

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings">PutRoleBindings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRoleBindings` <a name="PutRoleBindings" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings"></a>

```csharp
private void PutRoleBindings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings">RoleBindings</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindingsInput">RoleBindingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleBindings`<sup>Required</sup> <a name="RoleBindings" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList RoleBindings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `RoleBindingsInput`<sup>Optional</sup> <a name="RoleBindingsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindingsInput"></a>

```csharp
public object RoleBindingsInput { get; }
```

- *Type:* object

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---


### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get"></a>

```csharp
private GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resetConditionExpression">ResetConditionExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionExpression` <a name="ResetConditionExpression" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resetConditionExpression"></a>

```csharp
private void ResetConditionExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpressionInput">ConditionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression">ConditionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionExpressionInput`<sup>Optional</sup> <a name="ConditionExpressionInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpressionInput"></a>

```csharp
public string ConditionExpressionInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ConditionExpression`<sup>Required</sup> <a name="ConditionExpression" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression"></a>

```csharp
public string ConditionExpression { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess">PutGcpIamAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcpIamAccess` <a name="PutGcpIamAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess"></a>

```csharp
private void PutGcpIamAccess(GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess">GcpIamAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccessInput">GcpIamAccessInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcpIamAccess`<sup>Required</sup> <a name="GcpIamAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference GcpIamAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference</a>

---

##### `GcpIamAccessInput`<sup>Optional</sup> <a name="GcpIamAccessInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccessInput"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess GcpIamAccessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---


### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---


### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory">PutNotMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured">PutUnstructured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetNotMandatory">ResetNotMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetUnstructured">ResetUnstructured</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotMandatory` <a name="PutNotMandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory"></a>

```csharp
private void PutNotMandatory(GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---

##### `PutUnstructured` <a name="PutUnstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured"></a>

```csharp
private void PutUnstructured(GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---

##### `ResetNotMandatory` <a name="ResetNotMandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetNotMandatory"></a>

```csharp
private void ResetNotMandatory()
```

##### `ResetUnstructured` <a name="ResetUnstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetUnstructured"></a>

```csharp
private void ResetUnstructured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory">NotMandatory</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured">Unstructured</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatoryInput">NotMandatoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructuredInput">UnstructuredInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotMandatory`<sup>Required</sup> <a name="NotMandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference NotMandatory { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference</a>

---

##### `Unstructured`<sup>Required</sup> <a name="Unstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference Unstructured { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference</a>

---

##### `NotMandatoryInput`<sup>Optional</sup> <a name="NotMandatoryInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatoryInput"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory NotMandatoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---

##### `UnstructuredInput`<sup>Optional</sup> <a name="UnstructuredInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructuredInput"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured UnstructuredInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---


### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue"></a>

```csharp
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---


### GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



