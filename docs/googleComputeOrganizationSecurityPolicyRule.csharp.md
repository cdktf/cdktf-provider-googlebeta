# `googleComputeOrganizationSecurityPolicyRule` Submodule <a name="`googleComputeOrganizationSecurityPolicyRule` Submodule" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeOrganizationSecurityPolicyRule <a name="GoogleComputeOrganizationSecurityPolicyRule" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule google_compute_organization_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyRule(Construct Scope, string Id, GoogleComputeOrganizationSecurityPolicyRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig">GoogleComputeOrganizationSecurityPolicyRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig">GoogleComputeOrganizationSecurityPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTargetResources">ResetTargetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTargetServiceAccounts">ResetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putMatch"></a>

```csharp
private void PutMatch(GoogleComputeOrganizationSecurityPolicyRuleMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeOrganizationSecurityPolicyRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetEnableLogging"></a>

```csharp
private void ResetEnableLogging()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetPreview"></a>

```csharp
private void ResetPreview()
```

##### `ResetTargetResources` <a name="ResetTargetResources" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTargetResources"></a>

```csharp
private void ResetTargetResources()
```

##### `ResetTargetServiceAccounts` <a name="ResetTargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTargetServiceAccounts"></a>

```csharp
private void ResetTargetServiceAccounts()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeOrganizationSecurityPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeOrganizationSecurityPolicyRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeOrganizationSecurityPolicyRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeOrganizationSecurityPolicyRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeOrganizationSecurityPolicyRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeOrganizationSecurityPolicyRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeOrganizationSecurityPolicyRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeOrganizationSecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeOrganizationSecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.previewInput">PreviewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetResourcesInput">TargetResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetServiceAccountsInput">TargetServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.enableLogging">EnableLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.preview">Preview</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetResources">TargetResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.match"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.timeouts"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.enableLoggingInput"></a>

```csharp
public object EnableLoggingInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.matchInput"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyRuleMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a>

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.previewInput"></a>

```csharp
public object PreviewInput { get; }
```

- *Type:* object

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `TargetResourcesInput`<sup>Optional</sup> <a name="TargetResourcesInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetResourcesInput"></a>

```csharp
public string[] TargetResourcesInput { get; }
```

- *Type:* string[]

---

##### `TargetServiceAccountsInput`<sup>Optional</sup> <a name="TargetServiceAccountsInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetServiceAccountsInput"></a>

```csharp
public string[] TargetServiceAccountsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.enableLogging"></a>

```csharp
public object EnableLogging { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.preview"></a>

```csharp
public object Preview { get; }
```

- *Type:* object

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `TargetResources`<sup>Required</sup> <a name="TargetResources" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetResources"></a>

```csharp
public string[] TargetResources { get; }
```

- *Type:* string[]

---

##### `TargetServiceAccounts`<sup>Required</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetServiceAccounts"></a>

```csharp
public string[] TargetServiceAccounts { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeOrganizationSecurityPolicyRuleConfig <a name="GoogleComputeOrganizationSecurityPolicyRuleConfig" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    GoogleComputeOrganizationSecurityPolicyRuleMatch Match,
    string PolicyId,
    double Priority,
    string Description = null,
    string Direction = null,
    object EnableLogging = null,
    string Id = null,
    object Preview = null,
    string[] TargetResources = null,
    string[] TargetServiceAccounts = null,
    GoogleComputeOrganizationSecurityPolicyRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.action">Action</a></code> | <code>string</code> | The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny" or "goto_next". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.policyId">PolicyId</a></code> | <code>string</code> | The ID of the OrganizationSecurityPolicy this rule applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.priority">Priority</a></code> | <code>double</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.description">Description</a></code> | <code>string</code> | A description of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.direction">Direction</a></code> | <code>string</code> | The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.enableLogging">EnableLogging</a></code> | <code>object</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#id GoogleComputeOrganizationSecurityPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.preview">Preview</a></code> | <code>object</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.targetResources">TargetResources</a></code> | <code>string[]</code> | A list of network resource URLs to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>string[]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny" or "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#action GoogleComputeOrganizationSecurityPolicyRule#action}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.match"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyRuleMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#match GoogleComputeOrganizationSecurityPolicyRule#match}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

The ID of the OrganizationSecurityPolicy this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#policy_id GoogleComputeOrganizationSecurityPolicyRule#policy_id}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#priority GoogleComputeOrganizationSecurityPolicyRule#priority}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#description GoogleComputeOrganizationSecurityPolicyRule#description}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#direction GoogleComputeOrganizationSecurityPolicyRule#direction}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.enableLogging"></a>

```csharp
public object EnableLogging { get; set; }
```

- *Type:* object

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#enable_logging GoogleComputeOrganizationSecurityPolicyRule#enable_logging}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#id GoogleComputeOrganizationSecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.preview"></a>

```csharp
public object Preview { get; set; }
```

- *Type:* object

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#preview GoogleComputeOrganizationSecurityPolicyRule#preview}

---

##### `TargetResources`<sup>Optional</sup> <a name="TargetResources" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.targetResources"></a>

```csharp
public string[] TargetResources { get; set; }
```

- *Type:* string[]

A list of network resource URLs to which this rule applies.

This field allows you to control which network's VMs get
this rule. If this field is left blank, all VMs
within the organization will receive the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#target_resources GoogleComputeOrganizationSecurityPolicyRule#target_resources}

---

##### `TargetServiceAccounts`<sup>Optional</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.targetServiceAccounts"></a>

```csharp
public string[] TargetServiceAccounts { get; set; }
```

- *Type:* string[]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#target_service_accounts GoogleComputeOrganizationSecurityPolicyRule#target_service_accounts}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.timeouts"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#timeouts GoogleComputeOrganizationSecurityPolicyRule#timeouts}

---

### GoogleComputeOrganizationSecurityPolicyRuleMatch <a name="GoogleComputeOrganizationSecurityPolicyRuleMatch" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyRuleMatch {
    GoogleComputeOrganizationSecurityPolicyRuleMatchConfig Config,
    string Description = null,
    string VersionedExpr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.description">Description</a></code> | <code>string</code> | A description of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.versionedExpr">VersionedExpr</a></code> | <code>string</code> | Preconfigured versioned expression. For organization security policy rules, the only supported type is "FIREWALL". Default value: "FIREWALL" Possible values: ["FIREWALL"]. |

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.config"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyRuleMatchConfig Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#config GoogleComputeOrganizationSecurityPolicyRule#config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#description GoogleComputeOrganizationSecurityPolicyRule#description}

---

##### `VersionedExpr`<sup>Optional</sup> <a name="VersionedExpr" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.versionedExpr"></a>

```csharp
public string VersionedExpr { get; set; }
```

- *Type:* string

Preconfigured versioned expression. For organization security policy rules, the only supported type is "FIREWALL". Default value: "FIREWALL" Possible values: ["FIREWALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#versioned_expr GoogleComputeOrganizationSecurityPolicyRule#versioned_expr}

---

### GoogleComputeOrganizationSecurityPolicyRuleMatchConfig <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfig" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyRuleMatchConfig {
    object Layer4Config,
    string[] DestIpRanges = null,
    string[] SrcIpRanges = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.layer4Config">Layer4Config</a></code> | <code>object</code> | layer4_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.destIpRanges">DestIpRanges</a></code> | <code>string[]</code> | Destination IP address range in CIDR format. Required for EGRESS rules. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | Source IP address range in CIDR format. Required for INGRESS rules. |

---

##### `Layer4Config`<sup>Required</sup> <a name="Layer4Config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.layer4Config"></a>

```csharp
public object Layer4Config { get; set; }
```

- *Type:* object

layer4_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#layer4_config GoogleComputeOrganizationSecurityPolicyRule#layer4_config}

---

##### `DestIpRanges`<sup>Optional</sup> <a name="DestIpRanges" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.destIpRanges"></a>

```csharp
public string[] DestIpRanges { get; set; }
```

- *Type:* string[]

Destination IP address range in CIDR format. Required for EGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#dest_ip_ranges GoogleComputeOrganizationSecurityPolicyRule#dest_ip_ranges}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; set; }
```

- *Type:* string[]

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#src_ip_ranges GoogleComputeOrganizationSecurityPolicyRule#src_ip_ranges}

---

### GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config {
    string IpProtocol,
    string[] Ports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.property.ports">Ports</a></code> | <code>string[]</code> | An optional list of ports to which this rule applies. |

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The IP protocol to which this rule applies.

The protocol
type is required when creating a firewall rule.
This value can either be one of the following well
known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#ip_protocol GoogleComputeOrganizationSecurityPolicyRule#ip_protocol}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.property.ports"></a>

```csharp
public string[] Ports { get; set; }
```

- *Type:* string[]

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#ports GoogleComputeOrganizationSecurityPolicyRule#ports}

---

### GoogleComputeOrganizationSecurityPolicyRuleTimeouts <a name="GoogleComputeOrganizationSecurityPolicyRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#create GoogleComputeOrganizationSecurityPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#delete GoogleComputeOrganizationSecurityPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#update GoogleComputeOrganizationSecurityPolicyRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#create GoogleComputeOrganizationSecurityPolicyRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#delete GoogleComputeOrganizationSecurityPolicyRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_organization_security_policy_rule#update GoogleComputeOrganizationSecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.get"></a>

```csharp
private GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.portsInput">PortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ports">Ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.portsInput"></a>

```csharp
public string[] PortsInput { get; }
```

- *Type:* string[]

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ports"></a>

```csharp
public string[] Ports { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.putLayer4Config">PutLayer4Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetDestIpRanges">ResetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLayer4Config` <a name="PutLayer4Config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.putLayer4Config"></a>

```csharp
private void PutLayer4Config(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.putLayer4Config.parameter.value"></a>

- *Type:* object

---

##### `ResetDestIpRanges` <a name="ResetDestIpRanges" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetDestIpRanges"></a>

```csharp
private void ResetDestIpRanges()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges"></a>

```csharp
private void ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.layer4Config">Layer4Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.destIpRangesInput">DestIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.layer4ConfigInput">Layer4ConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Layer4Config`<sup>Required</sup> <a name="Layer4Config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.layer4Config"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList Layer4Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList</a>

---

##### `DestIpRangesInput`<sup>Optional</sup> <a name="DestIpRangesInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.destIpRangesInput"></a>

```csharp
public string[] DestIpRangesInput { get; }
```

- *Type:* string[]

---

##### `Layer4ConfigInput`<sup>Optional</sup> <a name="Layer4ConfigInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.layer4ConfigInput"></a>

```csharp
public object Layer4ConfigInput { get; }
```

- *Type:* object

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput"></a>

```csharp
public string[] SrcIpRangesInput { get; }
```

- *Type:* string[]

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.destIpRanges"></a>

```csharp
public string[] DestIpRanges { get; }
```

- *Type:* string[]

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyRuleMatchConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---


### GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetVersionedExpr">ResetVersionedExpr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig"></a>

```csharp
private void PutConfig(GoogleComputeOrganizationSecurityPolicyRuleMatchConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetVersionedExpr` <a name="ResetVersionedExpr" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetVersionedExpr"></a>

```csharp
private void ResetVersionedExpr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExprInput">VersionedExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExpr">VersionedExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.config"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.configInput"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyRuleMatchConfig ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `VersionedExprInput`<sup>Optional</sup> <a name="VersionedExprInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExprInput"></a>

```csharp
public string VersionedExprInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `VersionedExpr`<sup>Required</sup> <a name="VersionedExpr" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```csharp
public string VersionedExpr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyRuleMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a>

---


### GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



