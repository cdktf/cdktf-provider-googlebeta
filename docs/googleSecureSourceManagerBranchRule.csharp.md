# `googleSecureSourceManagerBranchRule` Submodule <a name="`googleSecureSourceManagerBranchRule` Submodule" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecureSourceManagerBranchRule <a name="GoogleSecureSourceManagerBranchRule" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule google_secure_source_manager_branch_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecureSourceManagerBranchRule(Construct Scope, string Id, GoogleSecureSourceManagerBranchRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig">GoogleSecureSourceManagerBranchRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig">GoogleSecureSourceManagerBranchRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetAllowStaleReviews">ResetAllowStaleReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetMinimumApprovalsCount">ResetMinimumApprovalsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetMinimumReviewsCount">ResetMinimumReviewsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetRequireCommentsResolved">ResetRequireCommentsResolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetRequireLinearHistory">ResetRequireLinearHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetRequirePullRequest">ResetRequirePullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleSecureSourceManagerBranchRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeouts">GoogleSecureSourceManagerBranchRuleTimeouts</a>

---

##### `ResetAllowStaleReviews` <a name="ResetAllowStaleReviews" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetAllowStaleReviews"></a>

```csharp
private void ResetAllowStaleReviews()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMinimumApprovalsCount` <a name="ResetMinimumApprovalsCount" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetMinimumApprovalsCount"></a>

```csharp
private void ResetMinimumApprovalsCount()
```

##### `ResetMinimumReviewsCount` <a name="ResetMinimumReviewsCount" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetMinimumReviewsCount"></a>

```csharp
private void ResetMinimumReviewsCount()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRequireCommentsResolved` <a name="ResetRequireCommentsResolved" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetRequireCommentsResolved"></a>

```csharp
private void ResetRequireCommentsResolved()
```

##### `ResetRequireLinearHistory` <a name="ResetRequireLinearHistory" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetRequireLinearHistory"></a>

```csharp
private void ResetRequireLinearHistory()
```

##### `ResetRequirePullRequest` <a name="ResetRequirePullRequest" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetRequirePullRequest"></a>

```csharp
private void ResetRequirePullRequest()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSecureSourceManagerBranchRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecureSourceManagerBranchRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecureSourceManagerBranchRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecureSourceManagerBranchRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecureSourceManagerBranchRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleSecureSourceManagerBranchRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSecureSourceManagerBranchRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSecureSourceManagerBranchRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecureSourceManagerBranchRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference">GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.allowStaleReviewsInput">AllowStaleReviewsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.branchRuleIdInput">BranchRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.includePatternInput">IncludePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.minimumApprovalsCountInput">MinimumApprovalsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.minimumReviewsCountInput">MinimumReviewsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.requireCommentsResolvedInput">RequireCommentsResolvedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.requireLinearHistoryInput">RequireLinearHistoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.requirePullRequestInput">RequirePullRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.allowStaleReviews">AllowStaleReviews</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.branchRuleId">BranchRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.includePattern">IncludePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.minimumApprovalsCount">MinimumApprovalsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.minimumReviewsCount">MinimumReviewsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.requireCommentsResolved">RequireCommentsResolved</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.requireLinearHistory">RequireLinearHistory</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.requirePullRequest">RequirePullRequest</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.timeouts"></a>

```csharp
public GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference">GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AllowStaleReviewsInput`<sup>Optional</sup> <a name="AllowStaleReviewsInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.allowStaleReviewsInput"></a>

```csharp
public object AllowStaleReviewsInput { get; }
```

- *Type:* object

---

##### `BranchRuleIdInput`<sup>Optional</sup> <a name="BranchRuleIdInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.branchRuleIdInput"></a>

```csharp
public string BranchRuleIdInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludePatternInput`<sup>Optional</sup> <a name="IncludePatternInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.includePatternInput"></a>

```csharp
public string IncludePatternInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MinimumApprovalsCountInput`<sup>Optional</sup> <a name="MinimumApprovalsCountInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.minimumApprovalsCountInput"></a>

```csharp
public double MinimumApprovalsCountInput { get; }
```

- *Type:* double

---

##### `MinimumReviewsCountInput`<sup>Optional</sup> <a name="MinimumReviewsCountInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.minimumReviewsCountInput"></a>

```csharp
public double MinimumReviewsCountInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `RequireCommentsResolvedInput`<sup>Optional</sup> <a name="RequireCommentsResolvedInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.requireCommentsResolvedInput"></a>

```csharp
public object RequireCommentsResolvedInput { get; }
```

- *Type:* object

---

##### `RequireLinearHistoryInput`<sup>Optional</sup> <a name="RequireLinearHistoryInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.requireLinearHistoryInput"></a>

```csharp
public object RequireLinearHistoryInput { get; }
```

- *Type:* object

---

##### `RequirePullRequestInput`<sup>Optional</sup> <a name="RequirePullRequestInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.requirePullRequestInput"></a>

```csharp
public object RequirePullRequestInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowStaleReviews`<sup>Required</sup> <a name="AllowStaleReviews" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.allowStaleReviews"></a>

```csharp
public object AllowStaleReviews { get; }
```

- *Type:* object

---

##### `BranchRuleId`<sup>Required</sup> <a name="BranchRuleId" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.branchRuleId"></a>

```csharp
public string BranchRuleId { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludePattern`<sup>Required</sup> <a name="IncludePattern" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.includePattern"></a>

```csharp
public string IncludePattern { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MinimumApprovalsCount`<sup>Required</sup> <a name="MinimumApprovalsCount" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.minimumApprovalsCount"></a>

```csharp
public double MinimumApprovalsCount { get; }
```

- *Type:* double

---

##### `MinimumReviewsCount`<sup>Required</sup> <a name="MinimumReviewsCount" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.minimumReviewsCount"></a>

```csharp
public double MinimumReviewsCount { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `RequireCommentsResolved`<sup>Required</sup> <a name="RequireCommentsResolved" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.requireCommentsResolved"></a>

```csharp
public object RequireCommentsResolved { get; }
```

- *Type:* object

---

##### `RequireLinearHistory`<sup>Required</sup> <a name="RequireLinearHistory" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.requireLinearHistory"></a>

```csharp
public object RequireLinearHistory { get; }
```

- *Type:* object

---

##### `RequirePullRequest`<sup>Required</sup> <a name="RequirePullRequest" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.requirePullRequest"></a>

```csharp
public object RequirePullRequest { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecureSourceManagerBranchRuleConfig <a name="GoogleSecureSourceManagerBranchRuleConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecureSourceManagerBranchRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BranchRuleId,
    string IncludePattern,
    string Location,
    string RepositoryId,
    object AllowStaleReviews = null,
    object Disabled = null,
    string Id = null,
    double MinimumApprovalsCount = null,
    double MinimumReviewsCount = null,
    string Project = null,
    object RequireCommentsResolved = null,
    object RequireLinearHistory = null,
    object RequirePullRequest = null,
    GoogleSecureSourceManagerBranchRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.branchRuleId">BranchRuleId</a></code> | <code>string</code> | The ID for the BranchRule. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.includePattern">IncludePattern</a></code> | <code>string</code> | The BranchRule matches branches based on the specified regular expression. Use .* to match all branches. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.location">Location</a></code> | <code>string</code> | The location for the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | The ID for the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.allowStaleReviews">AllowStaleReviews</a></code> | <code>object</code> | Determines if allow stale reviews or approvals before merging to the branch. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.disabled">Disabled</a></code> | <code>object</code> | Determines if the branch rule is disabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#id GoogleSecureSourceManagerBranchRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.minimumApprovalsCount">MinimumApprovalsCount</a></code> | <code>double</code> | The minimum number of approvals required for the branch rule to be matched. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.minimumReviewsCount">MinimumReviewsCount</a></code> | <code>double</code> | The minimum number of reviews required for the branch rule to be matched. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#project GoogleSecureSourceManagerBranchRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.requireCommentsResolved">RequireCommentsResolved</a></code> | <code>object</code> | Determines if require comments resolved before merging to the branch. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.requireLinearHistory">RequireLinearHistory</a></code> | <code>object</code> | Determines if require linear history before merging to the branch. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.requirePullRequest">RequirePullRequest</a></code> | <code>object</code> | Determines if the branch rule requires a pull request or not. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeouts">GoogleSecureSourceManagerBranchRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BranchRuleId`<sup>Required</sup> <a name="BranchRuleId" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.branchRuleId"></a>

```csharp
public string BranchRuleId { get; set; }
```

- *Type:* string

The ID for the BranchRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#branch_rule_id GoogleSecureSourceManagerBranchRule#branch_rule_id}

---

##### `IncludePattern`<sup>Required</sup> <a name="IncludePattern" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.includePattern"></a>

```csharp
public string IncludePattern { get; set; }
```

- *Type:* string

The BranchRule matches branches based on the specified regular expression. Use .* to match all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#include_pattern GoogleSecureSourceManagerBranchRule#include_pattern}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#location GoogleSecureSourceManagerBranchRule#location}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#repository_id GoogleSecureSourceManagerBranchRule#repository_id}

---

##### `AllowStaleReviews`<sup>Optional</sup> <a name="AllowStaleReviews" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.allowStaleReviews"></a>

```csharp
public object AllowStaleReviews { get; set; }
```

- *Type:* object

Determines if allow stale reviews or approvals before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#allow_stale_reviews GoogleSecureSourceManagerBranchRule#allow_stale_reviews}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Determines if the branch rule is disabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#disabled GoogleSecureSourceManagerBranchRule#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#id GoogleSecureSourceManagerBranchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinimumApprovalsCount`<sup>Optional</sup> <a name="MinimumApprovalsCount" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.minimumApprovalsCount"></a>

```csharp
public double MinimumApprovalsCount { get; set; }
```

- *Type:* double

The minimum number of approvals required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#minimum_approvals_count GoogleSecureSourceManagerBranchRule#minimum_approvals_count}

---

##### `MinimumReviewsCount`<sup>Optional</sup> <a name="MinimumReviewsCount" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.minimumReviewsCount"></a>

```csharp
public double MinimumReviewsCount { get; set; }
```

- *Type:* double

The minimum number of reviews required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#minimum_reviews_count GoogleSecureSourceManagerBranchRule#minimum_reviews_count}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#project GoogleSecureSourceManagerBranchRule#project}.

---

##### `RequireCommentsResolved`<sup>Optional</sup> <a name="RequireCommentsResolved" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.requireCommentsResolved"></a>

```csharp
public object RequireCommentsResolved { get; set; }
```

- *Type:* object

Determines if require comments resolved before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#require_comments_resolved GoogleSecureSourceManagerBranchRule#require_comments_resolved}

---

##### `RequireLinearHistory`<sup>Optional</sup> <a name="RequireLinearHistory" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.requireLinearHistory"></a>

```csharp
public object RequireLinearHistory { get; set; }
```

- *Type:* object

Determines if require linear history before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#require_linear_history GoogleSecureSourceManagerBranchRule#require_linear_history}

---

##### `RequirePullRequest`<sup>Optional</sup> <a name="RequirePullRequest" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.requirePullRequest"></a>

```csharp
public object RequirePullRequest { get; set; }
```

- *Type:* object

Determines if the branch rule requires a pull request or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#require_pull_request GoogleSecureSourceManagerBranchRule#require_pull_request}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleConfig.property.timeouts"></a>

```csharp
public GoogleSecureSourceManagerBranchRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeouts">GoogleSecureSourceManagerBranchRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#timeouts GoogleSecureSourceManagerBranchRule#timeouts}

---

### GoogleSecureSourceManagerBranchRuleTimeouts <a name="GoogleSecureSourceManagerBranchRuleTimeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecureSourceManagerBranchRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#create GoogleSecureSourceManagerBranchRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#delete GoogleSecureSourceManagerBranchRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#update GoogleSecureSourceManagerBranchRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#create GoogleSecureSourceManagerBranchRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#delete GoogleSecureSourceManagerBranchRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secure_source_manager_branch_rule#update GoogleSecureSourceManagerBranchRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference <a name="GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecureSourceManagerBranchRule.GoogleSecureSourceManagerBranchRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



