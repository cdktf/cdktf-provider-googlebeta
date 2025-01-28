# `googleNetworkSecurityGatewaySecurityPolicyRule` Submodule <a name="`googleNetworkSecurityGatewaySecurityPolicyRule` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityGatewaySecurityPolicyRule <a name="GoogleNetworkSecurityGatewaySecurityPolicyRule" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule google_network_security_gateway_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityGatewaySecurityPolicyRule(Construct Scope, string Id, GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig">GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig">GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetApplicationMatcher">ResetApplicationMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetTlsInspectionEnabled">ResetTlsInspectionEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

---

##### `ResetApplicationMatcher` <a name="ResetApplicationMatcher" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetApplicationMatcher"></a>

```csharp
private void ResetApplicationMatcher()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsInspectionEnabled` <a name="ResetTlsInspectionEnabled" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetTlsInspectionEnabled"></a>

```csharp
private void ResetTlsInspectionEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityGatewaySecurityPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityGatewaySecurityPolicyRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityGatewaySecurityPolicyRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityGatewaySecurityPolicyRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityGatewaySecurityPolicyRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkSecurityGatewaySecurityPolicyRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityGatewaySecurityPolicyRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityGatewaySecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityGatewaySecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcherInput">ApplicationMatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.basicProfileInput">BasicProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicyInput">GatewaySecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcherInput">SessionMatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabledInput">TlsInspectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcher">ApplicationMatcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.basicProfile">BasicProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicy">GatewaySecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcher">SessionMatcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabled">TlsInspectionEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ApplicationMatcherInput`<sup>Optional</sup> <a name="ApplicationMatcherInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcherInput"></a>

```csharp
public string ApplicationMatcherInput { get; }
```

- *Type:* string

---

##### `BasicProfileInput`<sup>Optional</sup> <a name="BasicProfileInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.basicProfileInput"></a>

```csharp
public string BasicProfileInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `GatewaySecurityPolicyInput`<sup>Optional</sup> <a name="GatewaySecurityPolicyInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicyInput"></a>

```csharp
public string GatewaySecurityPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SessionMatcherInput`<sup>Optional</sup> <a name="SessionMatcherInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcherInput"></a>

```csharp
public string SessionMatcherInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TlsInspectionEnabledInput`<sup>Optional</sup> <a name="TlsInspectionEnabledInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabledInput"></a>

```csharp
public object TlsInspectionEnabledInput { get; }
```

- *Type:* object

---

##### `ApplicationMatcher`<sup>Required</sup> <a name="ApplicationMatcher" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcher"></a>

```csharp
public string ApplicationMatcher { get; }
```

- *Type:* string

---

##### `BasicProfile`<sup>Required</sup> <a name="BasicProfile" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.basicProfile"></a>

```csharp
public string BasicProfile { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `GatewaySecurityPolicy`<sup>Required</sup> <a name="GatewaySecurityPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicy"></a>

```csharp
public string GatewaySecurityPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SessionMatcher`<sup>Required</sup> <a name="SessionMatcher" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcher"></a>

```csharp
public string SessionMatcher { get; }
```

- *Type:* string

---

##### `TlsInspectionEnabled`<sup>Required</sup> <a name="TlsInspectionEnabled" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabled"></a>

```csharp
public object TlsInspectionEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig <a name="GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BasicProfile,
    object Enabled,
    string GatewaySecurityPolicy,
    string Location,
    string Name,
    double Priority,
    string SessionMatcher,
    string ApplicationMatcher = null,
    string Description = null,
    string Id = null,
    string Project = null,
    GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts Timeouts = null,
    object TlsInspectionEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.basicProfile">BasicProfile</a></code> | <code>string</code> | Profile which tells what the primitive action should be. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether the rule is enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.gatewaySecurityPolicy">GatewaySecurityPolicy</a></code> | <code>string</code> | The name of the gatewat security policy this rule belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.location">Location</a></code> | <code>string</code> | The location of the gateway security policy. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Priority of the rule. Lower number corresponds to higher precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.sessionMatcher">SessionMatcher</a></code> | <code>string</code> | CEL expression for matching on session criteria. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.applicationMatcher">ApplicationMatcher</a></code> | <code>string</code> | CEL expression for matching on L7/application level criteria. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.description">Description</a></code> | <code>string</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#id GoogleNetworkSecurityGatewaySecurityPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#project GoogleNetworkSecurityGatewaySecurityPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.tlsInspectionEnabled">TlsInspectionEnabled</a></code> | <code>object</code> | Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BasicProfile`<sup>Required</sup> <a name="BasicProfile" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.basicProfile"></a>

```csharp
public string BasicProfile { get; set; }
```

- *Type:* string

Profile which tells what the primitive action should be.

Possible values are: * ALLOW * DENY. Possible values: ["BASIC_PROFILE_UNSPECIFIED", "ALLOW", "DENY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#basic_profile GoogleNetworkSecurityGatewaySecurityPolicyRule#basic_profile}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether the rule is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#enabled GoogleNetworkSecurityGatewaySecurityPolicyRule#enabled}

---

##### `GatewaySecurityPolicy`<sup>Required</sup> <a name="GatewaySecurityPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.gatewaySecurityPolicy"></a>

```csharp
public string GatewaySecurityPolicy { get; set; }
```

- *Type:* string

The name of the gatewat security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#gateway_security_policy GoogleNetworkSecurityGatewaySecurityPolicyRule#gateway_security_policy}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the gateway security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#location GoogleNetworkSecurityGatewaySecurityPolicyRule#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#name GoogleNetworkSecurityGatewaySecurityPolicyRule#name}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Priority of the rule. Lower number corresponds to higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#priority GoogleNetworkSecurityGatewaySecurityPolicyRule#priority}

---

##### `SessionMatcher`<sup>Required</sup> <a name="SessionMatcher" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.sessionMatcher"></a>

```csharp
public string SessionMatcher { get; set; }
```

- *Type:* string

CEL expression for matching on session criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#session_matcher GoogleNetworkSecurityGatewaySecurityPolicyRule#session_matcher}

---

##### `ApplicationMatcher`<sup>Optional</sup> <a name="ApplicationMatcher" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.applicationMatcher"></a>

```csharp
public string ApplicationMatcher { get; set; }
```

- *Type:* string

CEL expression for matching on L7/application level criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#application_matcher GoogleNetworkSecurityGatewaySecurityPolicyRule#application_matcher}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#description GoogleNetworkSecurityGatewaySecurityPolicyRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#id GoogleNetworkSecurityGatewaySecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#project GoogleNetworkSecurityGatewaySecurityPolicyRule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#timeouts GoogleNetworkSecurityGatewaySecurityPolicyRule#timeouts}

---

##### `TlsInspectionEnabled`<sup>Optional</sup> <a name="TlsInspectionEnabled" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.tlsInspectionEnabled"></a>

```csharp
public object TlsInspectionEnabled { get; set; }
```

- *Type:* object

Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#tls_inspection_enabled GoogleNetworkSecurityGatewaySecurityPolicyRule#tls_inspection_enabled}

---

### GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts <a name="GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#create GoogleNetworkSecurityGatewaySecurityPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#delete GoogleNetworkSecurityGatewaySecurityPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#update GoogleNetworkSecurityGatewaySecurityPolicyRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#create GoogleNetworkSecurityGatewaySecurityPolicyRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#delete GoogleNetworkSecurityGatewaySecurityPolicyRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy_rule#update GoogleNetworkSecurityGatewaySecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference <a name="GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



