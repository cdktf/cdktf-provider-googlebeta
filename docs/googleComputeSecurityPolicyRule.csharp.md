# `googleComputeSecurityPolicyRule` Submodule <a name="`googleComputeSecurityPolicyRule` Submodule" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeSecurityPolicyRuleA <a name="GoogleComputeSecurityPolicyRuleA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule google_compute_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleA(Construct Scope, string Id, GoogleComputeSecurityPolicyRuleAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig">GoogleComputeSecurityPolicyRuleAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig">GoogleComputeSecurityPolicyRuleAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putHeaderAction">PutHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putPreconfiguredWafConfig">PutPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putRateLimitOptions">PutRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putRedirectOptions">PutRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetHeaderAction">ResetHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetPreconfiguredWafConfig">ResetPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetRateLimitOptions">ResetRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetRedirectOptions">ResetRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHeaderAction` <a name="PutHeaderAction" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putHeaderAction"></a>

```csharp
private void PutHeaderAction(GoogleComputeSecurityPolicyRuleHeaderActionA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putHeaderAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionA">GoogleComputeSecurityPolicyRuleHeaderActionA</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putMatch"></a>

```csharp
private void PutMatch(GoogleComputeSecurityPolicyRuleMatchA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA">GoogleComputeSecurityPolicyRuleMatchA</a>

---

##### `PutPreconfiguredWafConfig` <a name="PutPreconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putPreconfiguredWafConfig"></a>

```csharp
private void PutPreconfiguredWafConfig(GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putPreconfiguredWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA</a>

---

##### `PutRateLimitOptions` <a name="PutRateLimitOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putRateLimitOptions"></a>

```csharp
private void PutRateLimitOptions(GoogleComputeSecurityPolicyRuleRateLimitOptionsA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putRateLimitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsA</a>

---

##### `PutRedirectOptions` <a name="PutRedirectOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putRedirectOptions"></a>

```csharp
private void PutRedirectOptions(GoogleComputeSecurityPolicyRuleRedirectOptionsA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putRedirectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsA">GoogleComputeSecurityPolicyRuleRedirectOptionsA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeSecurityPolicyRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeouts">GoogleComputeSecurityPolicyRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHeaderAction` <a name="ResetHeaderAction" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetHeaderAction"></a>

```csharp
private void ResetHeaderAction()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetMatch"></a>

```csharp
private void ResetMatch()
```

##### `ResetPreconfiguredWafConfig` <a name="ResetPreconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetPreconfiguredWafConfig"></a>

```csharp
private void ResetPreconfiguredWafConfig()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetPreview"></a>

```csharp
private void ResetPreview()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRateLimitOptions` <a name="ResetRateLimitOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetRateLimitOptions"></a>

```csharp
private void ResetRateLimitOptions()
```

##### `ResetRedirectOptions` <a name="ResetRedirectOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetRedirectOptions"></a>

```csharp
private void ResetRedirectOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeSecurityPolicyRuleA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeSecurityPolicyRuleA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeSecurityPolicyRuleA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeSecurityPolicyRuleA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeSecurityPolicyRuleA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeSecurityPolicyRuleA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeSecurityPolicyRuleA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeSecurityPolicyRuleA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeSecurityPolicyRuleA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference">GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference">GoogleComputeSecurityPolicyRuleMatchAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference">GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.redirectOptions">RedirectOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference">GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference">GoogleComputeSecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.headerActionInput">HeaderActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionA">GoogleComputeSecurityPolicyRuleHeaderActionA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA">GoogleComputeSecurityPolicyRuleMatchA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.preconfiguredWafConfigInput">PreconfiguredWafConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.previewInput">PreviewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.rateLimitOptionsInput">RateLimitOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.redirectOptionsInput">RedirectOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsA">GoogleComputeSecurityPolicyRuleRedirectOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.preview">Preview</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `HeaderAction`<sup>Required</sup> <a name="HeaderAction" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.headerAction"></a>

```csharp
public GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference HeaderAction { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference">GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.match"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchAOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference">GoogleComputeSecurityPolicyRuleMatchAOutputReference</a>

---

##### `PreconfiguredWafConfig`<sup>Required</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.preconfiguredWafConfig"></a>

```csharp
public GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference PreconfiguredWafConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference</a>

---

##### `RateLimitOptions`<sup>Required</sup> <a name="RateLimitOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.rateLimitOptions"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference RateLimitOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference">GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference</a>

---

##### `RedirectOptions`<sup>Required</sup> <a name="RedirectOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.redirectOptions"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference RedirectOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference">GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.timeouts"></a>

```csharp
public GoogleComputeSecurityPolicyRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference">GoogleComputeSecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HeaderActionInput`<sup>Optional</sup> <a name="HeaderActionInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.headerActionInput"></a>

```csharp
public GoogleComputeSecurityPolicyRuleHeaderActionA HeaderActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionA">GoogleComputeSecurityPolicyRuleHeaderActionA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.matchInput"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchA MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA">GoogleComputeSecurityPolicyRuleMatchA</a>

---

##### `PreconfiguredWafConfigInput`<sup>Optional</sup> <a name="PreconfiguredWafConfigInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.preconfiguredWafConfigInput"></a>

```csharp
public GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA PreconfiguredWafConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA</a>

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.previewInput"></a>

```csharp
public object PreviewInput { get; }
```

- *Type:* object

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RateLimitOptionsInput`<sup>Optional</sup> <a name="RateLimitOptionsInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.rateLimitOptionsInput"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsA RateLimitOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsA</a>

---

##### `RedirectOptionsInput`<sup>Optional</sup> <a name="RedirectOptionsInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.redirectOptionsInput"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRedirectOptionsA RedirectOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsA">GoogleComputeSecurityPolicyRuleRedirectOptionsA</a>

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.securityPolicyInput"></a>

```csharp
public string SecurityPolicyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.preview"></a>

```csharp
public object Preview { get; }
```

- *Type:* object

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeSecurityPolicyRuleAConfig <a name="GoogleComputeSecurityPolicyRuleAConfig" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    double Priority,
    string SecurityPolicy,
    string Description = null,
    GoogleComputeSecurityPolicyRuleHeaderActionA HeaderAction = null,
    string Id = null,
    GoogleComputeSecurityPolicyRuleMatchA Match = null,
    GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA PreconfiguredWafConfig = null,
    object Preview = null,
    string Project = null,
    GoogleComputeSecurityPolicyRuleRateLimitOptionsA RateLimitOptions = null,
    GoogleComputeSecurityPolicyRuleRedirectOptionsA RedirectOptions = null,
    GoogleComputeSecurityPolicyRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.action">Action</a></code> | <code>string</code> | The Action to perform when the rule is matched. The following are the valid actions:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.priority">Priority</a></code> | <code>double</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | The name of the security policy this rule belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionA">GoogleComputeSecurityPolicyRuleHeaderActionA</a></code> | header_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#id GoogleComputeSecurityPolicyRuleA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA">GoogleComputeSecurityPolicyRuleMatchA</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.preview">Preview</a></code> | <code>object</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#project GoogleComputeSecurityPolicyRuleA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsA</a></code> | rate_limit_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.redirectOptions">RedirectOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsA">GoogleComputeSecurityPolicyRuleRedirectOptionsA</a></code> | redirect_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeouts">GoogleComputeSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The Action to perform when the rule is matched. The following are the valid actions:.

* allow: allow access to target.
* deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.
* rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.
* redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.
* throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#action GoogleComputeSecurityPolicyRuleA#action}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#priority GoogleComputeSecurityPolicyRuleA#priority}

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; set; }
```

- *Type:* string

The name of the security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#security_policy GoogleComputeSecurityPolicyRuleA#security_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#description GoogleComputeSecurityPolicyRuleA#description}

---

##### `HeaderAction`<sup>Optional</sup> <a name="HeaderAction" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.headerAction"></a>

```csharp
public GoogleComputeSecurityPolicyRuleHeaderActionA HeaderAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionA">GoogleComputeSecurityPolicyRuleHeaderActionA</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#header_action GoogleComputeSecurityPolicyRuleA#header_action}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#id GoogleComputeSecurityPolicyRuleA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.match"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchA Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA">GoogleComputeSecurityPolicyRuleMatchA</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#match GoogleComputeSecurityPolicyRuleA#match}

---

##### `PreconfiguredWafConfig`<sup>Optional</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.preconfiguredWafConfig"></a>

```csharp
public GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA PreconfiguredWafConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#preconfigured_waf_config GoogleComputeSecurityPolicyRuleA#preconfigured_waf_config}

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.preview"></a>

```csharp
public object Preview { get; set; }
```

- *Type:* object

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#preview GoogleComputeSecurityPolicyRuleA#preview}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#project GoogleComputeSecurityPolicyRuleA#project}.

---

##### `RateLimitOptions`<sup>Optional</sup> <a name="RateLimitOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.rateLimitOptions"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsA RateLimitOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsA</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#rate_limit_options GoogleComputeSecurityPolicyRuleA#rate_limit_options}

---

##### `RedirectOptions`<sup>Optional</sup> <a name="RedirectOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.redirectOptions"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRedirectOptionsA RedirectOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsA">GoogleComputeSecurityPolicyRuleRedirectOptionsA</a>

redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#redirect_options GoogleComputeSecurityPolicyRuleA#redirect_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleAConfig.property.timeouts"></a>

```csharp
public GoogleComputeSecurityPolicyRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeouts">GoogleComputeSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#timeouts GoogleComputeSecurityPolicyRuleA#timeouts}

---

### GoogleComputeSecurityPolicyRuleHeaderActionA <a name="GoogleComputeSecurityPolicyRuleHeaderActionA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleHeaderActionA {
    object RequestHeadersToAdds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionA.property.requestHeadersToAdds">RequestHeadersToAdds</a></code> | <code>object</code> | request_headers_to_adds block. |

---

##### `RequestHeadersToAdds`<sup>Optional</sup> <a name="RequestHeadersToAdds" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionA.property.requestHeadersToAdds"></a>

```csharp
public object RequestHeadersToAdds { get; set; }
```

- *Type:* object

request_headers_to_adds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#request_headers_to_adds GoogleComputeSecurityPolicyRuleA#request_headers_to_adds}

---

### GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA <a name="GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA {
    string HeaderName = null,
    string HeaderValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA.property.headerName">HeaderName</a></code> | <code>string</code> | The name of the header to set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA.property.headerValue">HeaderValue</a></code> | <code>string</code> | The value to set the named header to. |

---

##### `HeaderName`<sup>Optional</sup> <a name="HeaderName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

The name of the header to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#header_name GoogleComputeSecurityPolicyRuleA#header_name}

---

##### `HeaderValue`<sup>Optional</sup> <a name="HeaderValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA.property.headerValue"></a>

```csharp
public string HeaderValue { get; set; }
```

- *Type:* string

The value to set the named header to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#header_value GoogleComputeSecurityPolicyRuleA#header_value}

---

### GoogleComputeSecurityPolicyRuleMatchA <a name="GoogleComputeSecurityPolicyRuleMatchA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleMatchA {
    GoogleComputeSecurityPolicyRuleMatchConfigA Config = null,
    GoogleComputeSecurityPolicyRuleMatchExprA Expr = null,
    GoogleComputeSecurityPolicyRuleMatchExprOptionsA ExprOptions = null,
    string VersionedExpr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigA">GoogleComputeSecurityPolicyRuleMatchConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprA">GoogleComputeSecurityPolicyRuleMatchExprA</a></code> | expr block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA.property.exprOptions">ExprOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsA</a></code> | expr_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA.property.versionedExpr">VersionedExpr</a></code> | <code>string</code> | Preconfigured versioned expression. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA.property.config"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigA">GoogleComputeSecurityPolicyRuleMatchConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#config GoogleComputeSecurityPolicyRuleA#config}

---

##### `Expr`<sup>Optional</sup> <a name="Expr" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA.property.expr"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchExprA Expr { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprA">GoogleComputeSecurityPolicyRuleMatchExprA</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#expr GoogleComputeSecurityPolicyRuleA#expr}

---

##### `ExprOptions`<sup>Optional</sup> <a name="ExprOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA.property.exprOptions"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchExprOptionsA ExprOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsA</a>

expr_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#expr_options GoogleComputeSecurityPolicyRuleA#expr_options}

---

##### `VersionedExpr`<sup>Optional</sup> <a name="VersionedExpr" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA.property.versionedExpr"></a>

```csharp
public string VersionedExpr { get; set; }
```

- *Type:* string

Preconfigured versioned expression.

If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#versioned_expr GoogleComputeSecurityPolicyRuleA#versioned_expr}

---

### GoogleComputeSecurityPolicyRuleMatchConfigA <a name="GoogleComputeSecurityPolicyRuleMatchConfigA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleMatchConfigA {
    string[] SrcIpRanges = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigA.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of srcIpRanges allowed is 10. |

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigA.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; set; }
```

- *Type:* string[]

CIDR IP address range. Maximum number of srcIpRanges allowed is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#src_ip_ranges GoogleComputeSecurityPolicyRuleA#src_ip_ranges}

---

### GoogleComputeSecurityPolicyRuleMatchExprA <a name="GoogleComputeSecurityPolicyRuleMatchExprA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleMatchExprA {
    string Expression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprA.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprA.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#expression GoogleComputeSecurityPolicyRuleA#expression}

---

### GoogleComputeSecurityPolicyRuleMatchExprOptionsA <a name="GoogleComputeSecurityPolicyRuleMatchExprOptionsA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleMatchExprOptionsA {
    GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA RecaptchaOptions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsA.property.recaptchaOptions">RecaptchaOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a></code> | recaptcha_options block. |

---

##### `RecaptchaOptions`<sup>Required</sup> <a name="RecaptchaOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsA.property.recaptchaOptions"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA RecaptchaOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a>

recaptcha_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#recaptcha_options GoogleComputeSecurityPolicyRuleA#recaptcha_options}

---

### GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA <a name="GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA {
    string[] ActionTokenSiteKeys = null,
    string[] SessionTokenSiteKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.property.actionTokenSiteKeys">ActionTokenSiteKeys</a></code> | <code>string[]</code> | A list of site keys to be used during the validation of reCAPTCHA action-tokens. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.property.sessionTokenSiteKeys">SessionTokenSiteKeys</a></code> | <code>string[]</code> | A list of site keys to be used during the validation of reCAPTCHA session-tokens. |

---

##### `ActionTokenSiteKeys`<sup>Optional</sup> <a name="ActionTokenSiteKeys" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.property.actionTokenSiteKeys"></a>

```csharp
public string[] ActionTokenSiteKeys { get; set; }
```

- *Type:* string[]

A list of site keys to be used during the validation of reCAPTCHA action-tokens.

The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#action_token_site_keys GoogleComputeSecurityPolicyRuleA#action_token_site_keys}

---

##### `SessionTokenSiteKeys`<sup>Optional</sup> <a name="SessionTokenSiteKeys" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.property.sessionTokenSiteKeys"></a>

```csharp
public string[] SessionTokenSiteKeys { get; set; }
```

- *Type:* string[]

A list of site keys to be used during the validation of reCAPTCHA session-tokens.

The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#session_token_site_keys GoogleComputeSecurityPolicyRuleA#session_token_site_keys}

---

### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA {
    object Exclusion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA.property.exclusion">Exclusion</a></code> | <code>object</code> | exclusion block. |

---

##### `Exclusion`<sup>Optional</sup> <a name="Exclusion" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA.property.exclusion"></a>

```csharp
public object Exclusion { get; set; }
```

- *Type:* object

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#exclusion GoogleComputeSecurityPolicyRuleA#exclusion}

---

### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA {
    string TargetRuleSet,
    object RequestCookie = null,
    object RequestHeader = null,
    object RequestQueryParam = null,
    object RequestUri = null,
    string[] TargetRuleIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.targetRuleSet">TargetRuleSet</a></code> | <code>string</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestCookie">RequestCookie</a></code> | <code>object</code> | request_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestHeader">RequestHeader</a></code> | <code>object</code> | request_header block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestQueryParam">RequestQueryParam</a></code> | <code>object</code> | request_query_param block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestUri">RequestUri</a></code> | <code>object</code> | request_uri block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.targetRuleIds">TargetRuleIds</a></code> | <code>string[]</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.targetRuleSet"></a>

```csharp
public string TargetRuleSet { get; set; }
```

- *Type:* string

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#target_rule_set GoogleComputeSecurityPolicyRuleA#target_rule_set}

---

##### `RequestCookie`<sup>Optional</sup> <a name="RequestCookie" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestCookie"></a>

```csharp
public object RequestCookie { get; set; }
```

- *Type:* object

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#request_cookie GoogleComputeSecurityPolicyRuleA#request_cookie}

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestHeader"></a>

```csharp
public object RequestHeader { get; set; }
```

- *Type:* object

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#request_header GoogleComputeSecurityPolicyRuleA#request_header}

---

##### `RequestQueryParam`<sup>Optional</sup> <a name="RequestQueryParam" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestQueryParam"></a>

```csharp
public object RequestQueryParam { get; set; }
```

- *Type:* object

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#request_query_param GoogleComputeSecurityPolicyRuleA#request_query_param}

---

##### `RequestUri`<sup>Optional</sup> <a name="RequestUri" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestUri"></a>

```csharp
public object RequestUri { get; set; }
```

- *Type:* object

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#request_uri GoogleComputeSecurityPolicyRuleA#request_uri}

---

##### `TargetRuleIds`<sup>Optional</sup> <a name="TargetRuleIds" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.targetRuleIds"></a>

```csharp
public string[] TargetRuleIds { get; set; }
```

- *Type:* string[]

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#target_rule_ids GoogleComputeSecurityPolicyRuleA#target_rule_ids}

---

### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA {
    string Operator,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA.property.operator">Operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA.property.value">Value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#operator GoogleComputeSecurityPolicyRuleA#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#value GoogleComputeSecurityPolicyRuleA#value}

---

### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA {
    string Operator,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA.property.operator">Operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA.property.value">Value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#operator GoogleComputeSecurityPolicyRuleA#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#value GoogleComputeSecurityPolicyRuleA#value}

---

### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA {
    string Operator,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA.property.operator">Operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA.property.value">Value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#operator GoogleComputeSecurityPolicyRuleA#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#value GoogleComputeSecurityPolicyRuleA#value}

---

### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA {
    string Operator,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA.property.operator">Operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA.property.value">Value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#operator GoogleComputeSecurityPolicyRuleA#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#value GoogleComputeSecurityPolicyRuleA#value}

---

### GoogleComputeSecurityPolicyRuleRateLimitOptionsA <a name="GoogleComputeSecurityPolicyRuleRateLimitOptionsA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleRateLimitOptionsA {
    double BanDurationSec = null,
    GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA BanThreshold = null,
    string ConformAction = null,
    string EnforceOnKey = null,
    object EnforceOnKeyConfigs = null,
    string EnforceOnKeyName = null,
    string ExceedAction = null,
    GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA ExceedRedirectOptions = null,
    GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA RateLimitThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.banDurationSec">BanDurationSec</a></code> | <code>double</code> | Can only be specified if the action for the rule is "rate_based_ban". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a></code> | ban_threshold block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.conformAction">ConformAction</a></code> | <code>string</code> | Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKey">EnforceOnKey</a></code> | <code>string</code> | Determines the key to enforce the rateLimitThreshold on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code>object</code> | enforce_on_key_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.exceedAction">ExceedAction</a></code> | <code>string</code> | Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.exceedRedirectOptions">ExceedRedirectOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a></code> | exceed_redirect_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a></code> | rate_limit_threshold block. |

---

##### `BanDurationSec`<sup>Optional</sup> <a name="BanDurationSec" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.banDurationSec"></a>

```csharp
public double BanDurationSec { get; set; }
```

- *Type:* double

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#ban_duration_sec GoogleComputeSecurityPolicyRuleA#ban_duration_sec}

---

##### `BanThreshold`<sup>Optional</sup> <a name="BanThreshold" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.banThreshold"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA BanThreshold { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#ban_threshold GoogleComputeSecurityPolicyRuleA#ban_threshold}

---

##### `ConformAction`<sup>Optional</sup> <a name="ConformAction" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.conformAction"></a>

```csharp
public string ConformAction { get; set; }
```

- *Type:* string

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#conform_action GoogleComputeSecurityPolicyRuleA#conform_action}

---

##### `EnforceOnKey`<sup>Optional</sup> <a name="EnforceOnKey" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKey"></a>

```csharp
public string EnforceOnKey { get; set; }
```

- *Type:* string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:

* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKey" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#enforce_on_key GoogleComputeSecurityPolicyRuleA#enforce_on_key}

---

##### `EnforceOnKeyConfigs`<sup>Optional</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKeyConfigs"></a>

```csharp
public object EnforceOnKeyConfigs { get; set; }
```

- *Type:* object

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#enforce_on_key_configs GoogleComputeSecurityPolicyRuleA#enforce_on_key_configs}

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKeyName"></a>

```csharp
public string EnforceOnKeyName { get; set; }
```

- *Type:* string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#enforce_on_key_name GoogleComputeSecurityPolicyRuleA#enforce_on_key_name}

---

##### `ExceedAction`<sup>Optional</sup> <a name="ExceedAction" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.exceedAction"></a>

```csharp
public string ExceedAction { get; set; }
```

- *Type:* string

Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint.

Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#exceed_action GoogleComputeSecurityPolicyRuleA#exceed_action}

---

##### `ExceedRedirectOptions`<sup>Optional</sup> <a name="ExceedRedirectOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.exceedRedirectOptions"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA ExceedRedirectOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a>

exceed_redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#exceed_redirect_options GoogleComputeSecurityPolicyRuleA#exceed_redirect_options}

---

##### `RateLimitThreshold`<sup>Optional</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA.property.rateLimitThreshold"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA RateLimitThreshold { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#rate_limit_threshold GoogleComputeSecurityPolicyRuleA#rate_limit_threshold}

---

### GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA <a name="GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA {
    double Count = null,
    double IntervalSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.property.count">Count</a></code> | <code>double</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.property.intervalSec">IntervalSec</a></code> | <code>double</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#count GoogleComputeSecurityPolicyRuleA#count}

---

##### `IntervalSec`<sup>Optional</sup> <a name="IntervalSec" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.property.intervalSec"></a>

```csharp
public double IntervalSec { get; set; }
```

- *Type:* double

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#interval_sec GoogleComputeSecurityPolicyRuleA#interval_sec}

---

### GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsA <a name="GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsA {
    string EnforceOnKeyName = null,
    string EnforceOnKeyType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsA.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsA.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>string</code> | Determines the key to enforce the rateLimitThreshold on. |

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsA.property.enforceOnKeyName"></a>

```csharp
public string EnforceOnKeyName { get; set; }
```

- *Type:* string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#enforce_on_key_name GoogleComputeSecurityPolicyRuleA#enforce_on_key_name}

---

##### `EnforceOnKeyType`<sup>Optional</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsA.property.enforceOnKeyType"></a>

```csharp
public string EnforceOnKeyType { get; set; }
```

- *Type:* string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:

* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKeyConfigs" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#enforce_on_key_type GoogleComputeSecurityPolicyRuleA#enforce_on_key_type}

---

### GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA <a name="GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA {
    string Target = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.property.target">Target</a></code> | <code>string</code> | Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.property.type">Type</a></code> | <code>string</code> | Type of the redirect action. |

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#target GoogleComputeSecurityPolicyRuleA#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the redirect action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#type GoogleComputeSecurityPolicyRuleA#type}

---

### GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA <a name="GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA {
    double Count = null,
    double IntervalSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.property.count">Count</a></code> | <code>double</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.property.intervalSec">IntervalSec</a></code> | <code>double</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#count GoogleComputeSecurityPolicyRuleA#count}

---

##### `IntervalSec`<sup>Optional</sup> <a name="IntervalSec" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.property.intervalSec"></a>

```csharp
public double IntervalSec { get; set; }
```

- *Type:* double

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#interval_sec GoogleComputeSecurityPolicyRuleA#interval_sec}

---

### GoogleComputeSecurityPolicyRuleRedirectOptionsA <a name="GoogleComputeSecurityPolicyRuleRedirectOptionsA" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleRedirectOptionsA {
    string Target = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsA.property.target">Target</a></code> | <code>string</code> | Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsA.property.type">Type</a></code> | <code>string</code> | Type of the redirect action. |

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsA.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#target GoogleComputeSecurityPolicyRuleA#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsA.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the redirect action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#type GoogleComputeSecurityPolicyRuleA#type}

---

### GoogleComputeSecurityPolicyRuleTimeouts <a name="GoogleComputeSecurityPolicyRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#create GoogleComputeSecurityPolicyRuleA#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#delete GoogleComputeSecurityPolicyRuleA#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#update GoogleComputeSecurityPolicyRuleA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#create GoogleComputeSecurityPolicyRuleA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#delete GoogleComputeSecurityPolicyRuleA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_security_policy_rule#update GoogleComputeSecurityPolicyRuleA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference <a name="GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.putRequestHeadersToAdds">PutRequestHeadersToAdds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.resetRequestHeadersToAdds">ResetRequestHeadersToAdds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeadersToAdds` <a name="PutRequestHeadersToAdds" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.putRequestHeadersToAdds"></a>

```csharp
private void PutRequestHeadersToAdds(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.putRequestHeadersToAdds.parameter.value"></a>

- *Type:* object

---

##### `ResetRequestHeadersToAdds` <a name="ResetRequestHeadersToAdds" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.resetRequestHeadersToAdds"></a>

```csharp
private void ResetRequestHeadersToAdds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.property.requestHeadersToAdds">RequestHeadersToAdds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList">GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.property.requestHeadersToAddsInput">RequestHeadersToAddsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionA">GoogleComputeSecurityPolicyRuleHeaderActionA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestHeadersToAdds`<sup>Required</sup> <a name="RequestHeadersToAdds" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.property.requestHeadersToAdds"></a>

```csharp
public GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList RequestHeadersToAdds { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList">GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList</a>

---

##### `RequestHeadersToAddsInput`<sup>Optional</sup> <a name="RequestHeadersToAddsInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.property.requestHeadersToAddsInput"></a>

```csharp
public object RequestHeadersToAddsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionAOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSecurityPolicyRuleHeaderActionA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionA">GoogleComputeSecurityPolicyRuleHeaderActionA</a>

---


### GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList <a name="GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.get"></a>

```csharp
private GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference <a name="GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resetHeaderName">ResetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resetHeaderValue">ResetHeaderValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderName` <a name="ResetHeaderName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resetHeaderName"></a>

```csharp
private void ResetHeaderName()
```

##### `ResetHeaderValue` <a name="ResetHeaderValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resetHeaderValue"></a>

```csharp
private void ResetHeaderValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerValue">HeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerValueInput"></a>

```csharp
public string HeaderValueInput { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerValue"></a>

```csharp
public string HeaderValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRuleMatchAOutputReference <a name="GoogleComputeSecurityPolicyRuleMatchAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleMatchAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.putExpr">PutExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.putExprOptions">PutExprOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.resetExpr">ResetExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.resetExprOptions">ResetExprOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.resetVersionedExpr">ResetVersionedExpr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.putConfig"></a>

```csharp
private void PutConfig(GoogleComputeSecurityPolicyRuleMatchConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigA">GoogleComputeSecurityPolicyRuleMatchConfigA</a>

---

##### `PutExpr` <a name="PutExpr" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.putExpr"></a>

```csharp
private void PutExpr(GoogleComputeSecurityPolicyRuleMatchExprA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprA">GoogleComputeSecurityPolicyRuleMatchExprA</a>

---

##### `PutExprOptions` <a name="PutExprOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.putExprOptions"></a>

```csharp
private void PutExprOptions(GoogleComputeSecurityPolicyRuleMatchExprOptionsA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.putExprOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsA</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetExpr` <a name="ResetExpr" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.resetExpr"></a>

```csharp
private void ResetExpr()
```

##### `ResetExprOptions` <a name="ResetExprOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.resetExprOptions"></a>

```csharp
private void ResetExprOptions()
```

##### `ResetVersionedExpr` <a name="ResetVersionedExpr" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.resetVersionedExpr"></a>

```csharp
private void ResetVersionedExpr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference">GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference">GoogleComputeSecurityPolicyRuleMatchExprAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.exprOptions">ExprOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference">GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigA">GoogleComputeSecurityPolicyRuleMatchConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.exprInput">ExprInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprA">GoogleComputeSecurityPolicyRuleMatchExprA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.exprOptionsInput">ExprOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.versionedExprInput">VersionedExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.versionedExpr">VersionedExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA">GoogleComputeSecurityPolicyRuleMatchA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.config"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference">GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference</a>

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.expr"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchExprAOutputReference Expr { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference">GoogleComputeSecurityPolicyRuleMatchExprAOutputReference</a>

---

##### `ExprOptions`<sup>Required</sup> <a name="ExprOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.exprOptions"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference ExprOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference">GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.configInput"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchConfigA ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigA">GoogleComputeSecurityPolicyRuleMatchConfigA</a>

---

##### `ExprInput`<sup>Optional</sup> <a name="ExprInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.exprInput"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchExprA ExprInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprA">GoogleComputeSecurityPolicyRuleMatchExprA</a>

---

##### `ExprOptionsInput`<sup>Optional</sup> <a name="ExprOptionsInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.exprOptionsInput"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchExprOptionsA ExprOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsA</a>

---

##### `VersionedExprInput`<sup>Optional</sup> <a name="VersionedExprInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.versionedExprInput"></a>

```csharp
public string VersionedExprInput { get; }
```

- *Type:* string

---

##### `VersionedExpr`<sup>Required</sup> <a name="VersionedExpr" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.versionedExpr"></a>

```csharp
public string VersionedExpr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchAOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchA">GoogleComputeSecurityPolicyRuleMatchA</a>

---


### GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference <a name="GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.resetSrcIpRanges"></a>

```csharp
private void ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigA">GoogleComputeSecurityPolicyRuleMatchConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.property.srcIpRangesInput"></a>

```csharp
public string[] SrcIpRangesInput { get; }
```

- *Type:* string[]

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigAOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchConfigA">GoogleComputeSecurityPolicyRuleMatchConfigA</a>

---


### GoogleComputeSecurityPolicyRuleMatchExprAOutputReference <a name="GoogleComputeSecurityPolicyRuleMatchExprAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleMatchExprAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprA">GoogleComputeSecurityPolicyRuleMatchExprA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprAOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchExprA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprA">GoogleComputeSecurityPolicyRuleMatchExprA</a>

---


### GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference <a name="GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.putRecaptchaOptions">PutRecaptchaOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecaptchaOptions` <a name="PutRecaptchaOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.putRecaptchaOptions"></a>

```csharp
private void PutRecaptchaOptions(GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.putRecaptchaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.recaptchaOptions">RecaptchaOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference">GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.recaptchaOptionsInput">RecaptchaOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecaptchaOptions`<sup>Required</sup> <a name="RecaptchaOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.recaptchaOptions"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference RecaptchaOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference">GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference</a>

---

##### `RecaptchaOptionsInput`<sup>Optional</sup> <a name="RecaptchaOptionsInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.recaptchaOptionsInput"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA RecaptchaOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchExprOptionsA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsA</a>

---


### GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference <a name="GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resetActionTokenSiteKeys">ResetActionTokenSiteKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resetSessionTokenSiteKeys">ResetSessionTokenSiteKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionTokenSiteKeys` <a name="ResetActionTokenSiteKeys" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resetActionTokenSiteKeys"></a>

```csharp
private void ResetActionTokenSiteKeys()
```

##### `ResetSessionTokenSiteKeys` <a name="ResetSessionTokenSiteKeys" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resetSessionTokenSiteKeys"></a>

```csharp
private void ResetSessionTokenSiteKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.actionTokenSiteKeysInput">ActionTokenSiteKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.sessionTokenSiteKeysInput">SessionTokenSiteKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.actionTokenSiteKeys">ActionTokenSiteKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.sessionTokenSiteKeys">SessionTokenSiteKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionTokenSiteKeysInput`<sup>Optional</sup> <a name="ActionTokenSiteKeysInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.actionTokenSiteKeysInput"></a>

```csharp
public string[] ActionTokenSiteKeysInput { get; }
```

- *Type:* string[]

---

##### `SessionTokenSiteKeysInput`<sup>Optional</sup> <a name="SessionTokenSiteKeysInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.sessionTokenSiteKeysInput"></a>

```csharp
public string[] SessionTokenSiteKeysInput { get; }
```

- *Type:* string[]

---

##### `ActionTokenSiteKeys`<sup>Required</sup> <a name="ActionTokenSiteKeys" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.actionTokenSiteKeys"></a>

```csharp
public string[] ActionTokenSiteKeys { get; }
```

- *Type:* string[]

---

##### `SessionTokenSiteKeys`<sup>Required</sup> <a name="SessionTokenSiteKeys" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.sessionTokenSiteKeys"></a>

```csharp
public string[] SessionTokenSiteKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a>

---


### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.putExclusion">PutExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.resetExclusion">ResetExclusion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusion` <a name="PutExclusion" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.putExclusion"></a>

```csharp
private void PutExclusion(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.putExclusion.parameter.value"></a>

- *Type:* object

---

##### `ResetExclusion` <a name="ResetExclusion" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.resetExclusion"></a>

```csharp
private void ResetExclusion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.exclusion">Exclusion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.exclusionInput">ExclusionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exclusion`<sup>Required</sup> <a name="Exclusion" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.exclusion"></a>

```csharp
public GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList Exclusion { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList</a>

---

##### `ExclusionInput`<sup>Optional</sup> <a name="ExclusionInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.exclusionInput"></a>

```csharp
public object ExclusionInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigA</a>

---


### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.get"></a>

```csharp
private GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestCookie">PutRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestQueryParam">PutRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestUri">PutRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestCookie">ResetRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestQueryParam">ResetRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestUri">ResetRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetTargetRuleIds">ResetTargetRuleIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestCookie` <a name="PutRequestCookie" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestCookie"></a>

```csharp
private void PutRequestCookie(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* object

---

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestHeader"></a>

```csharp
private void PutRequestHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* object

---

##### `PutRequestQueryParam` <a name="PutRequestQueryParam" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestQueryParam"></a>

```csharp
private void PutRequestQueryParam(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* object

---

##### `PutRequestUri` <a name="PutRequestUri" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestUri"></a>

```csharp
private void PutRequestUri(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestUri.parameter.value"></a>

- *Type:* object

---

##### `ResetRequestCookie` <a name="ResetRequestCookie" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestCookie"></a>

```csharp
private void ResetRequestCookie()
```

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestHeader"></a>

```csharp
private void ResetRequestHeader()
```

##### `ResetRequestQueryParam` <a name="ResetRequestQueryParam" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestQueryParam"></a>

```csharp
private void ResetRequestQueryParam()
```

##### `ResetRequestUri` <a name="ResetRequestUri" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestUri"></a>

```csharp
private void ResetRequestUri()
```

##### `ResetTargetRuleIds` <a name="ResetTargetRuleIds" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetTargetRuleIds"></a>

```csharp
private void ResetTargetRuleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestCookie">RequestCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestQueryParam">RequestQueryParam</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestUri">RequestUri</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestCookieInput">RequestCookieInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestQueryParamInput">RequestQueryParamInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestUriInput">RequestUriInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleIdsInput">TargetRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleSetInput">TargetRuleSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleIds">TargetRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleSet">TargetRuleSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestCookie`<sup>Required</sup> <a name="RequestCookie" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestCookie"></a>

```csharp
public GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList RequestCookie { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList</a>

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestHeader"></a>

```csharp
public GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList RequestHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList</a>

---

##### `RequestQueryParam`<sup>Required</sup> <a name="RequestQueryParam" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestQueryParam"></a>

```csharp
public GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList RequestQueryParam { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList</a>

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestUri"></a>

```csharp
public GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList RequestUri { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList">GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList</a>

---

##### `RequestCookieInput`<sup>Optional</sup> <a name="RequestCookieInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestCookieInput"></a>

```csharp
public object RequestCookieInput { get; }
```

- *Type:* object

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestHeaderInput"></a>

```csharp
public object RequestHeaderInput { get; }
```

- *Type:* object

---

##### `RequestQueryParamInput`<sup>Optional</sup> <a name="RequestQueryParamInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestQueryParamInput"></a>

```csharp
public object RequestQueryParamInput { get; }
```

- *Type:* object

---

##### `RequestUriInput`<sup>Optional</sup> <a name="RequestUriInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestUriInput"></a>

```csharp
public object RequestUriInput { get; }
```

- *Type:* object

---

##### `TargetRuleIdsInput`<sup>Optional</sup> <a name="TargetRuleIdsInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleIdsInput"></a>

```csharp
public string[] TargetRuleIdsInput { get; }
```

- *Type:* string[]

---

##### `TargetRuleSetInput`<sup>Optional</sup> <a name="TargetRuleSetInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleSetInput"></a>

```csharp
public string TargetRuleSetInput { get; }
```

- *Type:* string

---

##### `TargetRuleIds`<sup>Required</sup> <a name="TargetRuleIds" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleIds"></a>

```csharp
public string[] TargetRuleIds { get; }
```

- *Type:* string[]

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleSet"></a>

```csharp
public string TargetRuleSet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.get"></a>

```csharp
private GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.get"></a>

```csharp
private GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.get"></a>

```csharp
private GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.get"></a>

```csharp
private GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference <a name="GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference <a name="GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putBanThreshold">PutBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putEnforceOnKeyConfigs">PutEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putExceedRedirectOptions">PutExceedRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putRateLimitThreshold">PutRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetBanDurationSec">ResetBanDurationSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetBanThreshold">ResetBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetConformAction">ResetConformAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKey">ResetEnforceOnKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKeyConfigs">ResetEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetExceedAction">ResetExceedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetExceedRedirectOptions">ResetExceedRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetRateLimitThreshold">ResetRateLimitThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBanThreshold` <a name="PutBanThreshold" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putBanThreshold"></a>

```csharp
private void PutBanThreshold(GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putBanThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a>

---

##### `PutEnforceOnKeyConfigs` <a name="PutEnforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putEnforceOnKeyConfigs"></a>

```csharp
private void PutEnforceOnKeyConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putEnforceOnKeyConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutExceedRedirectOptions` <a name="PutExceedRedirectOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putExceedRedirectOptions"></a>

```csharp
private void PutExceedRedirectOptions(GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putExceedRedirectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a>

---

##### `PutRateLimitThreshold` <a name="PutRateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putRateLimitThreshold"></a>

```csharp
private void PutRateLimitThreshold(GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putRateLimitThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a>

---

##### `ResetBanDurationSec` <a name="ResetBanDurationSec" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetBanDurationSec"></a>

```csharp
private void ResetBanDurationSec()
```

##### `ResetBanThreshold` <a name="ResetBanThreshold" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetBanThreshold"></a>

```csharp
private void ResetBanThreshold()
```

##### `ResetConformAction` <a name="ResetConformAction" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetConformAction"></a>

```csharp
private void ResetConformAction()
```

##### `ResetEnforceOnKey` <a name="ResetEnforceOnKey" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKey"></a>

```csharp
private void ResetEnforceOnKey()
```

##### `ResetEnforceOnKeyConfigs` <a name="ResetEnforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKeyConfigs"></a>

```csharp
private void ResetEnforceOnKeyConfigs()
```

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKeyName"></a>

```csharp
private void ResetEnforceOnKeyName()
```

##### `ResetExceedAction` <a name="ResetExceedAction" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetExceedAction"></a>

```csharp
private void ResetExceedAction()
```

##### `ResetExceedRedirectOptions` <a name="ResetExceedRedirectOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetExceedRedirectOptions"></a>

```csharp
private void ResetExceedRedirectOptions()
```

##### `ResetRateLimitThreshold` <a name="ResetRateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetRateLimitThreshold"></a>

```csharp
private void ResetRateLimitThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference">GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList">GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedRedirectOptions">ExceedRedirectOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference">GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference">GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banDurationSecInput">BanDurationSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banThresholdInput">BanThresholdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.conformActionInput">ConformActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyConfigsInput">EnforceOnKeyConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyInput">EnforceOnKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedActionInput">ExceedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedRedirectOptionsInput">ExceedRedirectOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.rateLimitThresholdInput">RateLimitThresholdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banDurationSec">BanDurationSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.conformAction">ConformAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKey">EnforceOnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedAction">ExceedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BanThreshold`<sup>Required</sup> <a name="BanThreshold" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banThreshold"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference BanThreshold { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference">GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference</a>

---

##### `EnforceOnKeyConfigs`<sup>Required</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyConfigs"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList EnforceOnKeyConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList">GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList</a>

---

##### `ExceedRedirectOptions`<sup>Required</sup> <a name="ExceedRedirectOptions" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedRedirectOptions"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference ExceedRedirectOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference">GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference</a>

---

##### `RateLimitThreshold`<sup>Required</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.rateLimitThreshold"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference RateLimitThreshold { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference">GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference</a>

---

##### `BanDurationSecInput`<sup>Optional</sup> <a name="BanDurationSecInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banDurationSecInput"></a>

```csharp
public double BanDurationSecInput { get; }
```

- *Type:* double

---

##### `BanThresholdInput`<sup>Optional</sup> <a name="BanThresholdInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banThresholdInput"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA BanThresholdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a>

---

##### `ConformActionInput`<sup>Optional</sup> <a name="ConformActionInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.conformActionInput"></a>

```csharp
public string ConformActionInput { get; }
```

- *Type:* string

---

##### `EnforceOnKeyConfigsInput`<sup>Optional</sup> <a name="EnforceOnKeyConfigsInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyConfigsInput"></a>

```csharp
public object EnforceOnKeyConfigsInput { get; }
```

- *Type:* object

---

##### `EnforceOnKeyInput`<sup>Optional</sup> <a name="EnforceOnKeyInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyInput"></a>

```csharp
public string EnforceOnKeyInput { get; }
```

- *Type:* string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyNameInput"></a>

```csharp
public string EnforceOnKeyNameInput { get; }
```

- *Type:* string

---

##### `ExceedActionInput`<sup>Optional</sup> <a name="ExceedActionInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedActionInput"></a>

```csharp
public string ExceedActionInput { get; }
```

- *Type:* string

---

##### `ExceedRedirectOptionsInput`<sup>Optional</sup> <a name="ExceedRedirectOptionsInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedRedirectOptionsInput"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA ExceedRedirectOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a>

---

##### `RateLimitThresholdInput`<sup>Optional</sup> <a name="RateLimitThresholdInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.rateLimitThresholdInput"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA RateLimitThresholdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a>

---

##### `BanDurationSec`<sup>Required</sup> <a name="BanDurationSec" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banDurationSec"></a>

```csharp
public double BanDurationSec { get; }
```

- *Type:* double

---

##### `ConformAction`<sup>Required</sup> <a name="ConformAction" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.conformAction"></a>

```csharp
public string ConformAction { get; }
```

- *Type:* string

---

##### `EnforceOnKey`<sup>Required</sup> <a name="EnforceOnKey" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKey"></a>

```csharp
public string EnforceOnKey { get; }
```

- *Type:* string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyName"></a>

```csharp
public string EnforceOnKeyName { get; }
```

- *Type:* string

---

##### `ExceedAction`<sup>Required</sup> <a name="ExceedAction" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedAction"></a>

```csharp
public string ExceedAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsA</a>

---


### GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference <a name="GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resetIntervalSec">ResetIntervalSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetIntervalSec` <a name="ResetIntervalSec" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resetIntervalSec"></a>

```csharp
private void ResetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.intervalSec">IntervalSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.intervalSecInput"></a>

```csharp
public double IntervalSecInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.intervalSec"></a>

```csharp
public double IntervalSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a>

---


### GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList <a name="GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.get"></a>

```csharp
private GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference <a name="GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.resetEnforceOnKeyType">ResetEnforceOnKeyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.resetEnforceOnKeyName"></a>

```csharp
private void ResetEnforceOnKeyName()
```

##### `ResetEnforceOnKeyType` <a name="ResetEnforceOnKeyType" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.resetEnforceOnKeyType"></a>

```csharp
private void ResetEnforceOnKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.enforceOnKeyTypeInput">EnforceOnKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.enforceOnKeyNameInput"></a>

```csharp
public string EnforceOnKeyNameInput { get; }
```

- *Type:* string

---

##### `EnforceOnKeyTypeInput`<sup>Optional</sup> <a name="EnforceOnKeyTypeInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.enforceOnKeyTypeInput"></a>

```csharp
public string EnforceOnKeyTypeInput { get; }
```

- *Type:* string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.enforceOnKeyName"></a>

```csharp
public string EnforceOnKeyName { get; }
```

- *Type:* string

---

##### `EnforceOnKeyType`<sup>Required</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.enforceOnKeyType"></a>

```csharp
public string EnforceOnKeyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference <a name="GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a>

---


### GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference <a name="GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resetIntervalSec">ResetIntervalSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetIntervalSec` <a name="ResetIntervalSec" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resetIntervalSec"></a>

```csharp
private void ResetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.intervalSec">IntervalSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.intervalSecInput"></a>

```csharp
public double IntervalSecInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.intervalSec"></a>

```csharp
public double IntervalSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a>

---


### GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference <a name="GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsA">GoogleComputeSecurityPolicyRuleRedirectOptionsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSecurityPolicyRuleRedirectOptionsA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleRedirectOptionsA">GoogleComputeSecurityPolicyRuleRedirectOptionsA</a>

---


### GoogleComputeSecurityPolicyRuleTimeoutsOutputReference <a name="GoogleComputeSecurityPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeSecurityPolicyRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeSecurityPolicyRule.GoogleComputeSecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



