# `googleGkeHubScopeRbacRoleBinding` Submodule <a name="`googleGkeHubScopeRbacRoleBinding` Submodule" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubScopeRbacRoleBinding <a name="GoogleGkeHubScopeRbacRoleBinding" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding google_gke_hub_scope_rbac_role_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubScopeRbacRoleBinding(Construct Scope, string Id, GoogleGkeHubScopeRbacRoleBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig">GoogleGkeHubScopeRbacRoleBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig">GoogleGkeHubScopeRbacRoleBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putRole">PutRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRole` <a name="PutRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putRole"></a>

```csharp
private void PutRole(GoogleGkeHubScopeRbacRoleBindingRole Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleGkeHubScopeRbacRoleBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a>

---

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetUser"></a>

```csharp
private void ResetUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeHubScopeRbacRoleBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeHubScopeRbacRoleBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeHubScopeRbacRoleBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeHubScopeRbacRoleBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeHubScopeRbacRoleBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleGkeHubScopeRbacRoleBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeHubScopeRbacRoleBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeHubScopeRbacRoleBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubScopeRbacRoleBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.role">Role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference">GoogleGkeHubScopeRbacRoleBindingRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.state">State</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList">GoogleGkeHubScopeRbacRoleBindingStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference">GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.roleInput">RoleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeIdInput">ScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput">ScopeRbacRoleBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId">ScopeRbacRoleBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.user">User</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.role"></a>

```csharp
public GoogleGkeHubScopeRbacRoleBindingRoleOutputReference Role { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference">GoogleGkeHubScopeRbacRoleBindingRoleOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.state"></a>

```csharp
public GoogleGkeHubScopeRbacRoleBindingStateList State { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList">GoogleGkeHubScopeRbacRoleBindingStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.timeouts"></a>

```csharp
public GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference">GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.roleInput"></a>

```csharp
public GoogleGkeHubScopeRbacRoleBindingRole RoleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a>

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeIdInput"></a>

```csharp
public string ScopeIdInput { get; }
```

- *Type:* string

---

##### `ScopeRbacRoleBindingIdInput`<sup>Optional</sup> <a name="ScopeRbacRoleBindingIdInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput"></a>

```csharp
public string ScopeRbacRoleBindingIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

##### `ScopeRbacRoleBindingId`<sup>Required</sup> <a name="ScopeRbacRoleBindingId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId"></a>

```csharp
public string ScopeRbacRoleBindingId { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubScopeRbacRoleBindingConfig <a name="GoogleGkeHubScopeRbacRoleBindingConfig" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubScopeRbacRoleBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleGkeHubScopeRbacRoleBindingRole Role,
    string ScopeId,
    string ScopeRbacRoleBindingId,
    string Group = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleGkeHubScopeRbacRoleBindingTimeouts Timeouts = null,
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.role">Role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.scopeId">ScopeId</a></code> | <code>string</code> | Id of the scope. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId">ScopeRbacRoleBindingId</a></code> | <code>string</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.group">Group</a></code> | <code>string</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#id GoogleGkeHubScopeRbacRoleBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels for this ScopeRBACRoleBinding. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#project GoogleGkeHubScopeRbacRoleBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.user">User</a></code> | <code>string</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.role"></a>

```csharp
public GoogleGkeHubScopeRbacRoleBindingRole Role { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#role GoogleGkeHubScopeRbacRoleBinding#role}

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.scopeId"></a>

```csharp
public string ScopeId { get; set; }
```

- *Type:* string

Id of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#scope_id GoogleGkeHubScopeRbacRoleBinding#scope_id}

---

##### `ScopeRbacRoleBindingId`<sup>Required</sup> <a name="ScopeRbacRoleBindingId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId"></a>

```csharp
public string ScopeRbacRoleBindingId { get; set; }
```

- *Type:* string

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#scope_rbac_role_binding_id GoogleGkeHubScopeRbacRoleBinding#scope_rbac_role_binding_id}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#group GoogleGkeHubScopeRbacRoleBinding#group}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#id GoogleGkeHubScopeRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels for this ScopeRBACRoleBinding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#labels GoogleGkeHubScopeRbacRoleBinding#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#project GoogleGkeHubScopeRbacRoleBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.timeouts"></a>

```csharp
public GoogleGkeHubScopeRbacRoleBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#timeouts GoogleGkeHubScopeRbacRoleBinding#timeouts}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#user GoogleGkeHubScopeRbacRoleBinding#user}

---

### GoogleGkeHubScopeRbacRoleBindingRole <a name="GoogleGkeHubScopeRbacRoleBindingRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubScopeRbacRoleBindingRole {
    string PredefinedRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole.property.predefinedRole">PredefinedRole</a></code> | <code>string</code> | PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"]. |

---

##### `PredefinedRole`<sup>Optional</sup> <a name="PredefinedRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole.property.predefinedRole"></a>

```csharp
public string PredefinedRole { get; set; }
```

- *Type:* string

PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#predefined_role GoogleGkeHubScopeRbacRoleBinding#predefined_role}

---

### GoogleGkeHubScopeRbacRoleBindingState <a name="GoogleGkeHubScopeRbacRoleBindingState" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingState.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubScopeRbacRoleBindingState {

};
```


### GoogleGkeHubScopeRbacRoleBindingTimeouts <a name="GoogleGkeHubScopeRbacRoleBindingTimeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubScopeRbacRoleBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#create GoogleGkeHubScopeRbacRoleBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#delete GoogleGkeHubScopeRbacRoleBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#update GoogleGkeHubScopeRbacRoleBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#create GoogleGkeHubScopeRbacRoleBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#delete GoogleGkeHubScopeRbacRoleBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gke_hub_scope_rbac_role_binding#update GoogleGkeHubScopeRbacRoleBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubScopeRbacRoleBindingRoleOutputReference <a name="GoogleGkeHubScopeRbacRoleBindingRoleOutputReference" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubScopeRbacRoleBindingRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole">ResetPredefinedRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredefinedRole` <a name="ResetPredefinedRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole"></a>

```csharp
private void ResetPredefinedRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput">PredefinedRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole">PredefinedRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredefinedRoleInput`<sup>Optional</sup> <a name="PredefinedRoleInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput"></a>

```csharp
public string PredefinedRoleInput { get; }
```

- *Type:* string

---

##### `PredefinedRole`<sup>Required</sup> <a name="PredefinedRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole"></a>

```csharp
public string PredefinedRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubScopeRbacRoleBindingRole InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a>

---


### GoogleGkeHubScopeRbacRoleBindingStateList <a name="GoogleGkeHubScopeRbacRoleBindingStateList" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubScopeRbacRoleBindingStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.get"></a>

```csharp
private GoogleGkeHubScopeRbacRoleBindingStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleGkeHubScopeRbacRoleBindingStateOutputReference <a name="GoogleGkeHubScopeRbacRoleBindingStateOutputReference" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubScopeRbacRoleBindingStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingState">GoogleGkeHubScopeRbacRoleBindingState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubScopeRbacRoleBindingState InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingState">GoogleGkeHubScopeRbacRoleBindingState</a>

---


### GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference <a name="GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



