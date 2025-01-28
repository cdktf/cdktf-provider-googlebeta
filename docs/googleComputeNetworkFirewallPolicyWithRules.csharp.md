# `googleComputeNetworkFirewallPolicyWithRules` Submodule <a name="`googleComputeNetworkFirewallPolicyWithRules` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkFirewallPolicyWithRules <a name="GoogleComputeNetworkFirewallPolicyWithRules" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules google_compute_network_firewall_policy_with_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRules(Construct Scope, string Id, GoogleComputeNetworkFirewallPolicyWithRulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig">GoogleComputeNetworkFirewallPolicyWithRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig">GoogleComputeNetworkFirewallPolicyWithRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.putRule.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeNetworkFirewallPolicyWithRulesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeouts">GoogleComputeNetworkFirewallPolicyWithRulesTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkFirewallPolicyWithRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNetworkFirewallPolicyWithRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNetworkFirewallPolicyWithRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNetworkFirewallPolicyWithRules.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNetworkFirewallPolicyWithRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeNetworkFirewallPolicyWithRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeNetworkFirewallPolicyWithRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeNetworkFirewallPolicyWithRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkFirewallPolicyWithRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.predefinedRules">PredefinedRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList">GoogleComputeNetworkFirewallPolicyWithRulesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.ruleTupleCount">RuleTupleCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; }
```

- *Type:* string

---

##### `PredefinedRules`<sup>Required</sup> <a name="PredefinedRules" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.predefinedRules"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList PredefinedRules { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.rule"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList">GoogleComputeNetworkFirewallPolicyWithRulesRuleList</a>

---

##### `RuleTupleCount`<sup>Required</sup> <a name="RuleTupleCount" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.ruleTupleCount"></a>

```csharp
public double RuleTupleCount { get; }
```

- *Type:* double

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.selfLinkWithId"></a>

```csharp
public string SelfLinkWithId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.timeouts"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference">GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkFirewallPolicyWithRulesConfig <a name="GoogleComputeNetworkFirewallPolicyWithRulesConfig" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Rule,
    string Description = null,
    string Id = null,
    string Project = null,
    GoogleComputeNetworkFirewallPolicyWithRulesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.name">Name</a></code> | <code>string</code> | User-provided name of the Network firewall policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.rule">Rule</a></code> | <code>object</code> | rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#id GoogleComputeNetworkFirewallPolicyWithRules#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#project GoogleComputeNetworkFirewallPolicyWithRules#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeouts">GoogleComputeNetworkFirewallPolicyWithRulesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

User-provided name of the Network firewall policy.

The name should be unique in the project in which the firewall policy is created.
The name must be 1-63 characters long, and comply with RFC1035. Specifically,
the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?
which means the first character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#name GoogleComputeNetworkFirewallPolicyWithRules#name}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#rule GoogleComputeNetworkFirewallPolicyWithRules#rule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#description GoogleComputeNetworkFirewallPolicyWithRules#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#id GoogleComputeNetworkFirewallPolicyWithRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#project GoogleComputeNetworkFirewallPolicyWithRules#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesConfig.property.timeouts"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeouts">GoogleComputeNetworkFirewallPolicyWithRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#timeouts GoogleComputeNetworkFirewallPolicyWithRules#timeouts}

---

### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRules <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRules" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRules {

};
```


### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch {

};
```


### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config {

};
```


### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag {

};
```


### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag {

};
```


### GoogleComputeNetworkFirewallPolicyWithRulesRule <a name="GoogleComputeNetworkFirewallPolicyWithRulesRule" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRule {
    string Action,
    GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch Match,
    double Priority,
    string Description = null,
    string Direction = null,
    object Disabled = null,
    object EnableLogging = null,
    string RuleName = null,
    string SecurityProfileGroup = null,
    object TargetSecureTag = null,
    string[] TargetServiceAccounts = null,
    object TlsInspect = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.action">Action</a></code> | <code>string</code> | The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny", "apply_security_profile_group" or "goto_next". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.priority">Priority</a></code> | <code>double</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.description">Description</a></code> | <code>string</code> | A description of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.direction">Direction</a></code> | <code>string</code> | The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.disabled">Disabled</a></code> | <code>object</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.enableLogging">EnableLogging</a></code> | <code>object</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.ruleName">RuleName</a></code> | <code>string</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.securityProfileGroup">SecurityProfileGroup</a></code> | <code>string</code> | A fully-qualified URL of a SecurityProfile resource instance. Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group Must be specified if action is 'apply_security_profile_group'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.targetSecureTag">TargetSecureTag</a></code> | <code>object</code> | target_secure_tag block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>string[]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.tlsInspect">TlsInspect</a></code> | <code>object</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny", "apply_security_profile_group" or "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#action GoogleComputeNetworkFirewallPolicyWithRules#action}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.match"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#match GoogleComputeNetworkFirewallPolicyWithRules#match}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#priority GoogleComputeNetworkFirewallPolicyWithRules#priority}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#description GoogleComputeNetworkFirewallPolicyWithRules#description}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#direction GoogleComputeNetworkFirewallPolicyWithRules#direction}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Denotes whether the firewall policy rule is disabled.

When set to true,
the firewall policy rule is not enforced and traffic behaves as if it did
not exist. If this is unspecified, the firewall policy rule will be
enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#disabled GoogleComputeNetworkFirewallPolicyWithRules#disabled}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.enableLogging"></a>

```csharp
public object EnableLogging { get; set; }
```

- *Type:* object

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#enable_logging GoogleComputeNetworkFirewallPolicyWithRules#enable_logging}

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#rule_name GoogleComputeNetworkFirewallPolicyWithRules#rule_name}

---

##### `SecurityProfileGroup`<sup>Optional</sup> <a name="SecurityProfileGroup" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.securityProfileGroup"></a>

```csharp
public string SecurityProfileGroup { get; set; }
```

- *Type:* string

A fully-qualified URL of a SecurityProfile resource instance. Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group Must be specified if action is 'apply_security_profile_group'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#security_profile_group GoogleComputeNetworkFirewallPolicyWithRules#security_profile_group}

---

##### `TargetSecureTag`<sup>Optional</sup> <a name="TargetSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.targetSecureTag"></a>

```csharp
public object TargetSecureTag { get; set; }
```

- *Type:* object

target_secure_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#target_secure_tag GoogleComputeNetworkFirewallPolicyWithRules#target_secure_tag}

---

##### `TargetServiceAccounts`<sup>Optional</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.targetServiceAccounts"></a>

```csharp
public string[] TargetServiceAccounts { get; set; }
```

- *Type:* string[]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#target_service_accounts GoogleComputeNetworkFirewallPolicyWithRules#target_service_accounts}

---

##### `TlsInspect`<sup>Optional</sup> <a name="TlsInspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRule.property.tlsInspect"></a>

```csharp
public object TlsInspect { get; set; }
```

- *Type:* object

Boolean flag indicating if the traffic should be TLS decrypted.

It can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#tls_inspect GoogleComputeNetworkFirewallPolicyWithRules#tls_inspect}

---

### GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch <a name="GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch {
    object Layer4Config,
    string[] DestAddressGroups = null,
    string[] DestFqdns = null,
    string[] DestIpRanges = null,
    string DestNetworkScope = null,
    string[] DestRegionCodes = null,
    string[] DestThreatIntelligences = null,
    string[] SrcAddressGroups = null,
    string[] SrcFqdns = null,
    string[] SrcIpRanges = null,
    string[] SrcNetworks = null,
    string SrcNetworkScope = null,
    string[] SrcRegionCodes = null,
    object SrcSecureTag = null,
    string[] SrcThreatIntelligences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.layer4Config">Layer4Config</a></code> | <code>object</code> | layer4_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destAddressGroups">DestAddressGroups</a></code> | <code>string[]</code> | Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destFqdns">DestFqdns</a></code> | <code>string[]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destIpRanges">DestIpRanges</a></code> | <code>string[]</code> | Destination IP address range in CIDR format. Required for EGRESS rules. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destNetworkScope">DestNetworkScope</a></code> | <code>string</code> | Network scope of the traffic destination. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destRegionCodes">DestRegionCodes</a></code> | <code>string[]</code> | Region codes whose IP addresses will be used to match for destination of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destThreatIntelligences">DestThreatIntelligences</a></code> | <code>string[]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcAddressGroups">SrcAddressGroups</a></code> | <code>string[]</code> | Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcFqdns">SrcFqdns</a></code> | <code>string[]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | Source IP address range in CIDR format. Required for INGRESS rules. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcNetworks">SrcNetworks</a></code> | <code>string[]</code> | Networks of the traffic source. It can be either a full or partial url. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcNetworkScope">SrcNetworkScope</a></code> | <code>string</code> | Network scope of the traffic source. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>string[]</code> | Region codes whose IP addresses will be used to match for source of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcSecureTag">SrcSecureTag</a></code> | <code>object</code> | src_secure_tag block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcThreatIntelligences">SrcThreatIntelligences</a></code> | <code>string[]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source. |

---

##### `Layer4Config`<sup>Required</sup> <a name="Layer4Config" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.layer4Config"></a>

```csharp
public object Layer4Config { get; set; }
```

- *Type:* object

layer4_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#layer4_config GoogleComputeNetworkFirewallPolicyWithRules#layer4_config}

---

##### `DestAddressGroups`<sup>Optional</sup> <a name="DestAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destAddressGroups"></a>

```csharp
public string[] DestAddressGroups { get; set; }
```

- *Type:* string[]

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#dest_address_groups GoogleComputeNetworkFirewallPolicyWithRules#dest_address_groups}

---

##### `DestFqdns`<sup>Optional</sup> <a name="DestFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destFqdns"></a>

```csharp
public string[] DestFqdns { get; set; }
```

- *Type:* string[]

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#dest_fqdns GoogleComputeNetworkFirewallPolicyWithRules#dest_fqdns}

---

##### `DestIpRanges`<sup>Optional</sup> <a name="DestIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destIpRanges"></a>

```csharp
public string[] DestIpRanges { get; set; }
```

- *Type:* string[]

Destination IP address range in CIDR format. Required for EGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#dest_ip_ranges GoogleComputeNetworkFirewallPolicyWithRules#dest_ip_ranges}

---

##### `DestNetworkScope`<sup>Optional</sup> <a name="DestNetworkScope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destNetworkScope"></a>

```csharp
public string DestNetworkScope { get; set; }
```

- *Type:* string

Network scope of the traffic destination. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#dest_network_scope GoogleComputeNetworkFirewallPolicyWithRules#dest_network_scope}

---

##### `DestRegionCodes`<sup>Optional</sup> <a name="DestRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destRegionCodes"></a>

```csharp
public string[] DestRegionCodes { get; set; }
```

- *Type:* string[]

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of destination region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#dest_region_codes GoogleComputeNetworkFirewallPolicyWithRules#dest_region_codes}

---

##### `DestThreatIntelligences`<sup>Optional</sup> <a name="DestThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.destThreatIntelligences"></a>

```csharp
public string[] DestThreatIntelligences { get; set; }
```

- *Type:* string[]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#dest_threat_intelligences GoogleComputeNetworkFirewallPolicyWithRules#dest_threat_intelligences}

---

##### `SrcAddressGroups`<sup>Optional</sup> <a name="SrcAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcAddressGroups"></a>

```csharp
public string[] SrcAddressGroups { get; set; }
```

- *Type:* string[]

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#src_address_groups GoogleComputeNetworkFirewallPolicyWithRules#src_address_groups}

---

##### `SrcFqdns`<sup>Optional</sup> <a name="SrcFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcFqdns"></a>

```csharp
public string[] SrcFqdns { get; set; }
```

- *Type:* string[]

Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#src_fqdns GoogleComputeNetworkFirewallPolicyWithRules#src_fqdns}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; set; }
```

- *Type:* string[]

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#src_ip_ranges GoogleComputeNetworkFirewallPolicyWithRules#src_ip_ranges}

---

##### `SrcNetworks`<sup>Optional</sup> <a name="SrcNetworks" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcNetworks"></a>

```csharp
public string[] SrcNetworks { get; set; }
```

- *Type:* string[]

Networks of the traffic source. It can be either a full or partial url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#src_networks GoogleComputeNetworkFirewallPolicyWithRules#src_networks}

---

##### `SrcNetworkScope`<sup>Optional</sup> <a name="SrcNetworkScope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcNetworkScope"></a>

```csharp
public string SrcNetworkScope { get; set; }
```

- *Type:* string

Network scope of the traffic source. Possible values: ["INTERNET", "INTRA_VPC", "NON_INTERNET", "VPC_NETWORKS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#src_network_scope GoogleComputeNetworkFirewallPolicyWithRules#src_network_scope}

---

##### `SrcRegionCodes`<sup>Optional</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcRegionCodes"></a>

```csharp
public string[] SrcRegionCodes { get; set; }
```

- *Type:* string[]

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#src_region_codes GoogleComputeNetworkFirewallPolicyWithRules#src_region_codes}

---

##### `SrcSecureTag`<sup>Optional</sup> <a name="SrcSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcSecureTag"></a>

```csharp
public object SrcSecureTag { get; set; }
```

- *Type:* object

src_secure_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#src_secure_tag GoogleComputeNetworkFirewallPolicyWithRules#src_secure_tag}

---

##### `SrcThreatIntelligences`<sup>Optional</sup> <a name="SrcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch.property.srcThreatIntelligences"></a>

```csharp
public string[] SrcThreatIntelligences { get; set; }
```

- *Type:* string[]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#src_threat_intelligences GoogleComputeNetworkFirewallPolicyWithRules#src_threat_intelligences}

---

### GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config <a name="GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config {
    string IpProtocol,
    string[] Ports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ports">Ports</a></code> | <code>string[]</code> | An optional list of ports to which this rule applies. |

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ipProtocol"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#ip_protocol GoogleComputeNetworkFirewallPolicyWithRules#ip_protocol}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ports"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#ports GoogleComputeNetworkFirewallPolicyWithRules#ports}

---

### GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag <a name="GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag.property.name">Name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API.

---

### GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag <a name="GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag.property.name">Name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API.

---

### GoogleComputeNetworkFirewallPolicyWithRulesTimeouts <a name="GoogleComputeNetworkFirewallPolicyWithRulesTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#create GoogleComputeNetworkFirewallPolicyWithRules#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#delete GoogleComputeNetworkFirewallPolicyWithRules#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#update GoogleComputeNetworkFirewallPolicyWithRules#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#create GoogleComputeNetworkFirewallPolicyWithRules#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#delete GoogleComputeNetworkFirewallPolicyWithRules#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_network_firewall_policy_with_rules#update GoogleComputeNetworkFirewallPolicyWithRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.get"></a>

```csharp
private GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get"></a>

```csharp
private GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ports">Ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ports"></a>

```csharp
public string[] Ports { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config</a>

---


### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.get"></a>

```csharp
private GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destAddressGroups">DestAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destFqdns">DestFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destRegionCodes">DestRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destThreatIntelligences">DestThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.layer4Config">Layer4Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcAddressGroups">SrcAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcFqdns">SrcFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcSecureTag">SrcSecureTag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcThreatIntelligences">SrcThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestAddressGroups`<sup>Required</sup> <a name="DestAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destAddressGroups"></a>

```csharp
public string[] DestAddressGroups { get; }
```

- *Type:* string[]

---

##### `DestFqdns`<sup>Required</sup> <a name="DestFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destFqdns"></a>

```csharp
public string[] DestFqdns { get; }
```

- *Type:* string[]

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destIpRanges"></a>

```csharp
public string[] DestIpRanges { get; }
```

- *Type:* string[]

---

##### `DestRegionCodes`<sup>Required</sup> <a name="DestRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destRegionCodes"></a>

```csharp
public string[] DestRegionCodes { get; }
```

- *Type:* string[]

---

##### `DestThreatIntelligences`<sup>Required</sup> <a name="DestThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destThreatIntelligences"></a>

```csharp
public string[] DestThreatIntelligences { get; }
```

- *Type:* string[]

---

##### `Layer4Config`<sup>Required</sup> <a name="Layer4Config" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.layer4Config"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList Layer4Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList</a>

---

##### `SrcAddressGroups`<sup>Required</sup> <a name="SrcAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcAddressGroups"></a>

```csharp
public string[] SrcAddressGroups { get; }
```

- *Type:* string[]

---

##### `SrcFqdns`<sup>Required</sup> <a name="SrcFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcFqdns"></a>

```csharp
public string[] SrcFqdns { get; }
```

- *Type:* string[]

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; }
```

- *Type:* string[]

---

##### `SrcRegionCodes`<sup>Required</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcRegionCodes"></a>

```csharp
public string[] SrcRegionCodes { get; }
```

- *Type:* string[]

---

##### `SrcSecureTag`<sup>Required</sup> <a name="SrcSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcSecureTag"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList SrcSecureTag { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList</a>

---

##### `SrcThreatIntelligences`<sup>Required</sup> <a name="SrcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcThreatIntelligences"></a>

```csharp
public string[] SrcThreatIntelligences { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch</a>

---


### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get"></a>

```csharp
private GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag</a>

---


### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.disabled">Disabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.enableLogging">EnableLogging</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.securityProfileGroup">SecurityProfileGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetSecureTag">TargetSecureTag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.tlsInspect">TlsInspect</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRules">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.enableLogging"></a>

```csharp
public IResolvable EnableLogging { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.match"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList Match { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `SecurityProfileGroup`<sup>Required</sup> <a name="SecurityProfileGroup" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.securityProfileGroup"></a>

```csharp
public string SecurityProfileGroup { get; }
```

- *Type:* string

---

##### `TargetSecureTag`<sup>Required</sup> <a name="TargetSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetSecureTag"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList TargetSecureTag { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList</a>

---

##### `TargetServiceAccounts`<sup>Required</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetServiceAccounts"></a>

```csharp
public string[] TargetServiceAccounts { get; }
```

- *Type:* string[]

---

##### `TlsInspect`<sup>Required</sup> <a name="TlsInspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.tlsInspect"></a>

```csharp
public IResolvable TlsInspect { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRules">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRules</a>

---


### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get"></a>

```csharp
private GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference <a name="GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag">GoogleComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag</a>

---


### GoogleComputeNetworkFirewallPolicyWithRulesRuleList <a name="GoogleComputeNetworkFirewallPolicyWithRulesRuleList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.get"></a>

```csharp
private GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList <a name="GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get"></a>

```csharp
private GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference <a name="GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.portsInput">PortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ports">Ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.portsInput"></a>

```csharp
public string[] PortsInput { get; }
```

- *Type:* string[]

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ports"></a>

```csharp
public string[] Ports { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference <a name="GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config">PutLayer4Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag">PutSrcSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestAddressGroups">ResetDestAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestFqdns">ResetDestFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestIpRanges">ResetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestNetworkScope">ResetDestNetworkScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestRegionCodes">ResetDestRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestThreatIntelligences">ResetDestThreatIntelligences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcAddressGroups">ResetSrcAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcFqdns">ResetSrcFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcNetworks">ResetSrcNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcNetworkScope">ResetSrcNetworkScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcRegionCodes">ResetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcSecureTag">ResetSrcSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcThreatIntelligences">ResetSrcThreatIntelligences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLayer4Config` <a name="PutLayer4Config" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config"></a>

```csharp
private void PutLayer4Config(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config.parameter.value"></a>

- *Type:* object

---

##### `PutSrcSecureTag` <a name="PutSrcSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag"></a>

```csharp
private void PutSrcSecureTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag.parameter.value"></a>

- *Type:* object

---

##### `ResetDestAddressGroups` <a name="ResetDestAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestAddressGroups"></a>

```csharp
private void ResetDestAddressGroups()
```

##### `ResetDestFqdns` <a name="ResetDestFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestFqdns"></a>

```csharp
private void ResetDestFqdns()
```

##### `ResetDestIpRanges` <a name="ResetDestIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestIpRanges"></a>

```csharp
private void ResetDestIpRanges()
```

##### `ResetDestNetworkScope` <a name="ResetDestNetworkScope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestNetworkScope"></a>

```csharp
private void ResetDestNetworkScope()
```

##### `ResetDestRegionCodes` <a name="ResetDestRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestRegionCodes"></a>

```csharp
private void ResetDestRegionCodes()
```

##### `ResetDestThreatIntelligences` <a name="ResetDestThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestThreatIntelligences"></a>

```csharp
private void ResetDestThreatIntelligences()
```

##### `ResetSrcAddressGroups` <a name="ResetSrcAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcAddressGroups"></a>

```csharp
private void ResetSrcAddressGroups()
```

##### `ResetSrcFqdns` <a name="ResetSrcFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcFqdns"></a>

```csharp
private void ResetSrcFqdns()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcIpRanges"></a>

```csharp
private void ResetSrcIpRanges()
```

##### `ResetSrcNetworks` <a name="ResetSrcNetworks" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcNetworks"></a>

```csharp
private void ResetSrcNetworks()
```

##### `ResetSrcNetworkScope` <a name="ResetSrcNetworkScope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcNetworkScope"></a>

```csharp
private void ResetSrcNetworkScope()
```

##### `ResetSrcRegionCodes` <a name="ResetSrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcRegionCodes"></a>

```csharp
private void ResetSrcRegionCodes()
```

##### `ResetSrcSecureTag` <a name="ResetSrcSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcSecureTag"></a>

```csharp
private void ResetSrcSecureTag()
```

##### `ResetSrcThreatIntelligences` <a name="ResetSrcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcThreatIntelligences"></a>

```csharp
private void ResetSrcThreatIntelligences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4Config">Layer4Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList">GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTag">SrcSecureTag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList">GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroupsInput">DestAddressGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdnsInput">DestFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRangesInput">DestIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destNetworkScopeInput">DestNetworkScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodesInput">DestRegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligencesInput">DestThreatIntelligencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4ConfigInput">Layer4ConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroupsInput">SrcAddressGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdnsInput">SrcFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcNetworkScopeInput">SrcNetworkScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcNetworksInput">SrcNetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodesInput">SrcRegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTagInput">SrcSecureTagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligencesInput">SrcThreatIntelligencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroups">DestAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdns">DestFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destNetworkScope">DestNetworkScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodes">DestRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligences">DestThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroups">SrcAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdns">SrcFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcNetworks">SrcNetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcNetworkScope">SrcNetworkScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligences">SrcThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Layer4Config`<sup>Required</sup> <a name="Layer4Config" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4Config"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList Layer4Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList">GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList</a>

---

##### `SrcSecureTag`<sup>Required</sup> <a name="SrcSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTag"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList SrcSecureTag { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList">GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList</a>

---

##### `DestAddressGroupsInput`<sup>Optional</sup> <a name="DestAddressGroupsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroupsInput"></a>

```csharp
public string[] DestAddressGroupsInput { get; }
```

- *Type:* string[]

---

##### `DestFqdnsInput`<sup>Optional</sup> <a name="DestFqdnsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdnsInput"></a>

```csharp
public string[] DestFqdnsInput { get; }
```

- *Type:* string[]

---

##### `DestIpRangesInput`<sup>Optional</sup> <a name="DestIpRangesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRangesInput"></a>

```csharp
public string[] DestIpRangesInput { get; }
```

- *Type:* string[]

---

##### `DestNetworkScopeInput`<sup>Optional</sup> <a name="DestNetworkScopeInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destNetworkScopeInput"></a>

```csharp
public string DestNetworkScopeInput { get; }
```

- *Type:* string

---

##### `DestRegionCodesInput`<sup>Optional</sup> <a name="DestRegionCodesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodesInput"></a>

```csharp
public string[] DestRegionCodesInput { get; }
```

- *Type:* string[]

---

##### `DestThreatIntelligencesInput`<sup>Optional</sup> <a name="DestThreatIntelligencesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligencesInput"></a>

```csharp
public string[] DestThreatIntelligencesInput { get; }
```

- *Type:* string[]

---

##### `Layer4ConfigInput`<sup>Optional</sup> <a name="Layer4ConfigInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4ConfigInput"></a>

```csharp
public object Layer4ConfigInput { get; }
```

- *Type:* object

---

##### `SrcAddressGroupsInput`<sup>Optional</sup> <a name="SrcAddressGroupsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroupsInput"></a>

```csharp
public string[] SrcAddressGroupsInput { get; }
```

- *Type:* string[]

---

##### `SrcFqdnsInput`<sup>Optional</sup> <a name="SrcFqdnsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdnsInput"></a>

```csharp
public string[] SrcFqdnsInput { get; }
```

- *Type:* string[]

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRangesInput"></a>

```csharp
public string[] SrcIpRangesInput { get; }
```

- *Type:* string[]

---

##### `SrcNetworkScopeInput`<sup>Optional</sup> <a name="SrcNetworkScopeInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcNetworkScopeInput"></a>

```csharp
public string SrcNetworkScopeInput { get; }
```

- *Type:* string

---

##### `SrcNetworksInput`<sup>Optional</sup> <a name="SrcNetworksInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcNetworksInput"></a>

```csharp
public string[] SrcNetworksInput { get; }
```

- *Type:* string[]

---

##### `SrcRegionCodesInput`<sup>Optional</sup> <a name="SrcRegionCodesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodesInput"></a>

```csharp
public string[] SrcRegionCodesInput { get; }
```

- *Type:* string[]

---

##### `SrcSecureTagInput`<sup>Optional</sup> <a name="SrcSecureTagInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTagInput"></a>

```csharp
public object SrcSecureTagInput { get; }
```

- *Type:* object

---

##### `SrcThreatIntelligencesInput`<sup>Optional</sup> <a name="SrcThreatIntelligencesInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligencesInput"></a>

```csharp
public string[] SrcThreatIntelligencesInput { get; }
```

- *Type:* string[]

---

##### `DestAddressGroups`<sup>Required</sup> <a name="DestAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroups"></a>

```csharp
public string[] DestAddressGroups { get; }
```

- *Type:* string[]

---

##### `DestFqdns`<sup>Required</sup> <a name="DestFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdns"></a>

```csharp
public string[] DestFqdns { get; }
```

- *Type:* string[]

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRanges"></a>

```csharp
public string[] DestIpRanges { get; }
```

- *Type:* string[]

---

##### `DestNetworkScope`<sup>Required</sup> <a name="DestNetworkScope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destNetworkScope"></a>

```csharp
public string DestNetworkScope { get; }
```

- *Type:* string

---

##### `DestRegionCodes`<sup>Required</sup> <a name="DestRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodes"></a>

```csharp
public string[] DestRegionCodes { get; }
```

- *Type:* string[]

---

##### `DestThreatIntelligences`<sup>Required</sup> <a name="DestThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligences"></a>

```csharp
public string[] DestThreatIntelligences { get; }
```

- *Type:* string[]

---

##### `SrcAddressGroups`<sup>Required</sup> <a name="SrcAddressGroups" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroups"></a>

```csharp
public string[] SrcAddressGroups { get; }
```

- *Type:* string[]

---

##### `SrcFqdns`<sup>Required</sup> <a name="SrcFqdns" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdns"></a>

```csharp
public string[] SrcFqdns { get; }
```

- *Type:* string[]

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; }
```

- *Type:* string[]

---

##### `SrcNetworks`<sup>Required</sup> <a name="SrcNetworks" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcNetworks"></a>

```csharp
public string[] SrcNetworks { get; }
```

- *Type:* string[]

---

##### `SrcNetworkScope`<sup>Required</sup> <a name="SrcNetworkScope" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcNetworkScope"></a>

```csharp
public string SrcNetworkScope { get; }
```

- *Type:* string

---

##### `SrcRegionCodes`<sup>Required</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodes"></a>

```csharp
public string[] SrcRegionCodes { get; }
```

- *Type:* string[]

---

##### `SrcThreatIntelligences`<sup>Required</sup> <a name="SrcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligences"></a>

```csharp
public string[] SrcThreatIntelligences { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch</a>

---


### GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList <a name="GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get"></a>

```csharp
private GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference <a name="GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference <a name="GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag">PutTargetSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetSecurityProfileGroup">ResetSecurityProfileGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetSecureTag">ResetTargetSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetServiceAccounts">ResetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetTlsInspect">ResetTlsInspect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch"></a>

```csharp
private void PutMatch(GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch</a>

---

##### `PutTargetSecureTag` <a name="PutTargetSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag"></a>

```csharp
private void PutTargetSecureTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetEnableLogging"></a>

```csharp
private void ResetEnableLogging()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetRuleName"></a>

```csharp
private void ResetRuleName()
```

##### `ResetSecurityProfileGroup` <a name="ResetSecurityProfileGroup" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetSecurityProfileGroup"></a>

```csharp
private void ResetSecurityProfileGroup()
```

##### `ResetTargetSecureTag` <a name="ResetTargetSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetSecureTag"></a>

```csharp
private void ResetTargetSecureTag()
```

##### `ResetTargetServiceAccounts` <a name="ResetTargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetServiceAccounts"></a>

```csharp
private void ResetTargetServiceAccounts()
```

##### `ResetTlsInspect` <a name="ResetTlsInspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.resetTlsInspect"></a>

```csharp
private void ResetTlsInspect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference">GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTag">TargetSecureTag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList">GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroupInput">SecurityProfileGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTagInput">TargetSecureTagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccountsInput">TargetServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspectInput">TlsInspectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLogging">EnableLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroup">SecurityProfileGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspect">TlsInspect</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.match"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference">GoogleComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference</a>

---

##### `TargetSecureTag`<sup>Required</sup> <a name="TargetSecureTag" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTag"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList TargetSecureTag { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList">GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLoggingInput"></a>

```csharp
public object EnableLoggingInput { get; }
```

- *Type:* object

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.matchInput"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeNetworkFirewallPolicyWithRulesRuleMatch</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `SecurityProfileGroupInput`<sup>Optional</sup> <a name="SecurityProfileGroupInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroupInput"></a>

```csharp
public string SecurityProfileGroupInput { get; }
```

- *Type:* string

---

##### `TargetSecureTagInput`<sup>Optional</sup> <a name="TargetSecureTagInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTagInput"></a>

```csharp
public object TargetSecureTagInput { get; }
```

- *Type:* object

---

##### `TargetServiceAccountsInput`<sup>Optional</sup> <a name="TargetServiceAccountsInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccountsInput"></a>

```csharp
public string[] TargetServiceAccountsInput { get; }
```

- *Type:* string[]

---

##### `TlsInspectInput`<sup>Optional</sup> <a name="TlsInspectInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspectInput"></a>

```csharp
public object TlsInspectInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLogging"></a>

```csharp
public object EnableLogging { get; }
```

- *Type:* object

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `SecurityProfileGroup`<sup>Required</sup> <a name="SecurityProfileGroup" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroup"></a>

```csharp
public string SecurityProfileGroup { get; }
```

- *Type:* string

---

##### `TargetServiceAccounts`<sup>Required</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccounts"></a>

```csharp
public string[] TargetServiceAccounts { get; }
```

- *Type:* string[]

---

##### `TlsInspect`<sup>Required</sup> <a name="TlsInspect" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspect"></a>

```csharp
public object TlsInspect { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList <a name="GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.get"></a>

```csharp
private GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference <a name="GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference <a name="GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkFirewallPolicyWithRules.GoogleComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



