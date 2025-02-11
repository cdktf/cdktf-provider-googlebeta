# `googleIamOrganizationsPolicyBinding` Submodule <a name="`googleIamOrganizationsPolicyBinding` Submodule" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamOrganizationsPolicyBinding <a name="GoogleIamOrganizationsPolicyBinding" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding google_iam_organizations_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamOrganizationsPolicyBinding(Construct Scope, string Id, GoogleIamOrganizationsPolicyBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig">GoogleIamOrganizationsPolicyBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig">GoogleIamOrganizationsPolicyBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetPolicyKind">ResetPolicyKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleIamOrganizationsPolicyBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTarget"></a>

```csharp
private void PutTarget(GoogleIamOrganizationsPolicyBindingTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIamOrganizationsPolicyBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicyKind` <a name="ResetPolicyKind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetPolicyKind"></a>

```csharp
private void ResetPolicyKind()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamOrganizationsPolicyBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamOrganizationsPolicyBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamOrganizationsPolicyBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamOrganizationsPolicyBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleIamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamOrganizationsPolicyBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamOrganizationsPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamOrganizationsPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference">GoogleIamOrganizationsPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyUid">PolicyUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference">GoogleIamOrganizationsPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference">GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingIdInput">PolicyBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKindInput">PolicyKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingId">PolicyBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKind">PolicyKind</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.condition"></a>

```csharp
public GoogleIamOrganizationsPolicyBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference">GoogleIamOrganizationsPolicyBindingConditionOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyUid`<sup>Required</sup> <a name="PolicyUid" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyUid"></a>

```csharp
public string PolicyUid { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.target"></a>

```csharp
public GoogleIamOrganizationsPolicyBindingTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference">GoogleIamOrganizationsPolicyBindingTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeouts"></a>

```csharp
public GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference">GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.conditionInput"></a>

```csharp
public GoogleIamOrganizationsPolicyBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PolicyBindingIdInput`<sup>Optional</sup> <a name="PolicyBindingIdInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingIdInput"></a>

```csharp
public string PolicyBindingIdInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `PolicyKindInput`<sup>Optional</sup> <a name="PolicyKindInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKindInput"></a>

```csharp
public string PolicyKindInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.targetInput"></a>

```csharp
public GoogleIamOrganizationsPolicyBindingTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `PolicyBindingId`<sup>Required</sup> <a name="PolicyBindingId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingId"></a>

```csharp
public string PolicyBindingId { get; }
```

- *Type:* string

---

##### `PolicyKind`<sup>Required</sup> <a name="PolicyKind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKind"></a>

```csharp
public string PolicyKind { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamOrganizationsPolicyBindingCondition <a name="GoogleIamOrganizationsPolicyBindingCondition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamOrganizationsPolicyBindingCondition {
    string Description = null,
    string Expression = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.description">Description</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.location">Location</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.title">Title</a></code> | <code>string</code> | Optional. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#description GoogleIamOrganizationsPolicyBinding#description}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#expression GoogleIamOrganizationsPolicyBinding#expression}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#location GoogleIamOrganizationsPolicyBinding#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#title GoogleIamOrganizationsPolicyBinding#title}

---

### GoogleIamOrganizationsPolicyBindingConfig <a name="GoogleIamOrganizationsPolicyBindingConfig" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamOrganizationsPolicyBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Organization,
    string Policy,
    string PolicyBindingId,
    GoogleIamOrganizationsPolicyBindingTarget Target,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    GoogleIamOrganizationsPolicyBindingCondition Condition = null,
    string DisplayName = null,
    string Id = null,
    string PolicyKind = null,
    GoogleIamOrganizationsPolicyBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.location">Location</a></code> | <code>string</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.organization">Organization</a></code> | <code>string</code> | The parent organization of the Policy Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policy">Policy</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyBindingId">PolicyBindingId</a></code> | <code>string</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#id GoogleIamOrganizationsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyKind">PolicyKind</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#location GoogleIamOrganizationsPolicyBinding#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The parent organization of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#organization GoogleIamOrganizationsPolicyBinding#organization}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#policy GoogleIamOrganizationsPolicyBinding#policy}

---

##### `PolicyBindingId`<sup>Required</sup> <a name="PolicyBindingId" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyBindingId"></a>

```csharp
public string PolicyBindingId { get; set; }
```

- *Type:* string

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#policy_binding_id GoogleIamOrganizationsPolicyBinding#policy_binding_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.target"></a>

```csharp
public GoogleIamOrganizationsPolicyBindingTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#target GoogleIamOrganizationsPolicyBinding#target}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#annotations GoogleIamOrganizationsPolicyBinding#annotations}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.condition"></a>

```csharp
public GoogleIamOrganizationsPolicyBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#condition GoogleIamOrganizationsPolicyBinding#condition}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#display_name GoogleIamOrganizationsPolicyBinding#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#id GoogleIamOrganizationsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyKind`<sup>Optional</sup> <a name="PolicyKind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyKind"></a>

```csharp
public string PolicyKind { get; set; }
```

- *Type:* string

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#policy_kind GoogleIamOrganizationsPolicyBinding#policy_kind}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.timeouts"></a>

```csharp
public GoogleIamOrganizationsPolicyBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#timeouts GoogleIamOrganizationsPolicyBinding#timeouts}

---

### GoogleIamOrganizationsPolicyBindingTarget <a name="GoogleIamOrganizationsPolicyBindingTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamOrganizationsPolicyBindingTarget {
    string PrincipalSet = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget.property.principalSet">PrincipalSet</a></code> | <code>string</code> | Required. |

---

##### `PrincipalSet`<sup>Optional</sup> <a name="PrincipalSet" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget.property.principalSet"></a>

```csharp
public string PrincipalSet { get; set; }
```

- *Type:* string

Required.

Immutable. The resource name of the policy to be bound.
The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#principal_set GoogleIamOrganizationsPolicyBinding#principal_set}

---

### GoogleIamOrganizationsPolicyBindingTimeouts <a name="GoogleIamOrganizationsPolicyBindingTimeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamOrganizationsPolicyBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#create GoogleIamOrganizationsPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#delete GoogleIamOrganizationsPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#update GoogleIamOrganizationsPolicyBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#create GoogleIamOrganizationsPolicyBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#delete GoogleIamOrganizationsPolicyBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_iam_organizations_policy_binding#update GoogleIamOrganizationsPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamOrganizationsPolicyBindingConditionOutputReference <a name="GoogleIamOrganizationsPolicyBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamOrganizationsPolicyBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleIamOrganizationsPolicyBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

---


### GoogleIamOrganizationsPolicyBindingTargetOutputReference <a name="GoogleIamOrganizationsPolicyBindingTargetOutputReference" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamOrganizationsPolicyBindingTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet">ResetPrincipalSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipalSet` <a name="ResetPrincipalSet" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```csharp
private void ResetPrincipalSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput">PrincipalSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSet">PrincipalSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalSetInput`<sup>Optional</sup> <a name="PrincipalSetInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```csharp
public string PrincipalSetInput { get; }
```

- *Type:* string

---

##### `PrincipalSet`<sup>Required</sup> <a name="PrincipalSet" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSet"></a>

```csharp
public string PrincipalSet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleIamOrganizationsPolicyBindingTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

---


### GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference <a name="GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



